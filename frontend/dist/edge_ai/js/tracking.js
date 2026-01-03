// ==================== TRACKING ====================
// MediaPipe Holistic tracking and Kalidokit solving

import { Config } from './config.js';
import { smoothRotation } from './utils.js';

export class Tracking {
  constructor(videoElement, avatarRig, onStatusUpdate) {
    this.video = videoElement;
    this.avatarRig = avatarRig;
    this.onStatusUpdate = onStatusUpdate;
    this.holistic = null;
    this.smoothedValues = {
      face: null,
      pose: null,
      leftHand: null,
      rightHand: null
    };
  }
  
  async init() {
    this.holistic = new Holistic({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/holistic@0.5.1635989137/${file}`
    });
    
    this.holistic.setOptions(Config.holistic);
    
    this.holistic.onResults((results) => this.processResults(results));
  }
  
  async start() {
    const camera = new Camera(this.video, {
      onFrame: async () => {
        await this.holistic.send({ image: this.video });
      },
      width: Config.camera.width,
      height: Config.camera.height
    });
    await camera.start();
  }
  
  processResults(results) {
    const status = [];
    
    const faceLandmarks = results.faceLandmarks;
    const pose3DLandmarks = results.ea;
    const pose2DLandmarks = results.poseLandmarks;
    
    // Hand landmarks are REVERSED in MediaPipe Holistic
    const leftHandLandmarks = results.rightHandLandmarks;
    const rightHandLandmarks = results.leftHandLandmarks;
    
    // Process face
    if (faceLandmarks) {
      status.push('Face ✓');
      this.processFace(faceLandmarks);
    }
    
    // Process pose
    if (pose2DLandmarks && pose3DLandmarks) {
      status.push('Pose ✓');
      this.processPose(pose2DLandmarks, pose3DLandmarks);
    }
    
    // Process hands
    if (leftHandLandmarks) {
      status.push('L-Hand ✓');
      this.processHand('left', leftHandLandmarks);
    }
    
    if (rightHandLandmarks) {
      status.push('R-Hand ✓');
      this.processHand('right', rightHandLandmarks);
    }
    
    // Update status
    if (this.onStatusUpdate) {
      this.onStatusUpdate(status.length > 0 ? status.join(' | ') : 'Searching...');
    }
  }
  
  processFace(faceLandmarks) {
    const rawFace = Kalidokit.Face.solve(faceLandmarks, {
      runtime: "mediapipe",
      video: this.video,
      smoothBlink: false,
      blinkSettings: [0.25, 0.75]
    });
    
    if (rawFace) {
      const rawEyes = { l: rawFace.eye.l, r: rawFace.eye.r };
      
      let riggedFace;
      if (this.smoothedValues.face) {
        riggedFace = {
          head: smoothRotation(this.smoothedValues.face.head, rawFace.head),
          eye: rawEyes,
          mouth: rawFace.mouth,
          pupil: rawFace.pupil,
          brow: rawFace.brow
        };
      } else {
        riggedFace = rawFace;
      }
      
      this.smoothedValues.face = riggedFace;
      this.avatarRig.rigFace(riggedFace);
    }
  }
  
  processPose(pose2DLandmarks, pose3DLandmarks) {
    const riggedPose = Kalidokit.Pose.solve(pose3DLandmarks, pose2DLandmarks, {
      runtime: "mediapipe",
      video: this.video
    });
    
    if (riggedPose) {
      this.smoothedValues.pose = riggedPose;
      this.avatarRig.rigPose(riggedPose);
    }
  }
  
  processHand(side, landmarks) {
    const sideCapital = side === 'left' ? 'Left' : 'Right';
    const rawHand = Kalidokit.Hand.solve(landmarks, sideCapital);
    
    if (rawHand) {
      const smoothKey = `${side}Hand`;
      
      let riggedHand;
      if (this.smoothedValues[smoothKey]) {
        riggedHand = {};
        for (const key in rawHand) {
          riggedHand[key] = smoothRotation(this.smoothedValues[smoothKey][key], rawHand[key]);
        }
      } else {
        riggedHand = rawHand;
      }
      
      this.smoothedValues[smoothKey] = riggedHand;
      this.avatarRig.rigHand(side, riggedHand, this.smoothedValues.pose);
    }
  }
}

// ==================== AVATAR RIGGING ====================
// VRM avatar bone manipulation and rigging

import { Config } from './config.js';
import { applyDeadZone } from './utils.js';

export class AvatarRig {
  constructor() {
    this.vrm = null;
    this.oldLookTarget = new THREE.Euler();
  }
  
  setVRM(vrm) {
    this.vrm = vrm;
  }
  
  // Apply rotation to a bone
  rigRotation(name, rotation = { x: 0, y: 0, z: 0 }, dampener = 1, lerpAmount = Config.tracking.defaultLerpAmount) {
    if (!this.vrm || !rotation) return;
    
    const Part = this.vrm.humanoid.getBoneNode(THREE_VRM.VRMSchema.HumanoidBoneName[name]);
    if (!Part) return;
    
    const filteredRotation = {
      x: applyDeadZone(rotation.x),
      y: applyDeadZone(rotation.y),
      z: applyDeadZone(rotation.z)
    };
    
    const euler = new THREE.Euler(
      filteredRotation.x * dampener,
      filteredRotation.y * dampener,
      filteredRotation.z * dampener,
      rotation.rotationOrder || "XYZ"
    );
    const quaternion = new THREE.Quaternion().setFromEuler(euler);
    Part.quaternion.slerp(quaternion, lerpAmount);
  }
  
  // Apply position to a bone
  rigPosition(name, position = { x: 0, y: 0, z: 0 }, dampener = 1, lerpAmount = 0.3) {
    if (!this.vrm || !position) return;
    
    const Part = this.vrm.humanoid.getBoneNode(THREE_VRM.VRMSchema.HumanoidBoneName[name]);
    if (!Part) return;
    
    const clampedY = Math.max(applyDeadZone(position.y) * dampener, 0);
    
    const vector = new THREE.Vector3(
      applyDeadZone(position.x) * dampener,
      clampedY,
      applyDeadZone(position.z) * dampener
    );
    Part.position.lerp(vector, lerpAmount);
  }
  
  // Apply face expressions and head movement
  rigFace(riggedFace) {
    if (!this.vrm || !riggedFace) return;
    
    // Head rotation
    this.rigRotation("Neck", riggedFace.head, 0.7);
    
    const Blendshape = this.vrm.blendShapeProxy;
    const PresetName = THREE_VRM.VRMSchema.BlendShapePresetName;
    
    if (Blendshape) {
      // Blink
      const leftBlink = 1 - riggedFace.eye.l;
      const rightBlink = 1 - riggedFace.eye.r;
      Blendshape.setValue(PresetName.BlinkL, leftBlink);
      Blendshape.setValue(PresetName.BlinkR, rightBlink);
      
      // Mouth shapes
      const mouthLerp = 0.5;
      const lerp = Kalidokit.Vector.lerp;
      
      Blendshape.setValue(PresetName.A, lerp(Blendshape.getValue(PresetName.A), riggedFace.mouth.shape.A, mouthLerp));
      Blendshape.setValue(PresetName.I, lerp(Blendshape.getValue(PresetName.I), riggedFace.mouth.shape.I, mouthLerp));
      Blendshape.setValue(PresetName.U, lerp(Blendshape.getValue(PresetName.U), riggedFace.mouth.shape.U, mouthLerp));
      Blendshape.setValue(PresetName.E, lerp(Blendshape.getValue(PresetName.E), riggedFace.mouth.shape.E, mouthLerp));
      Blendshape.setValue(PresetName.O, lerp(Blendshape.getValue(PresetName.O), riggedFace.mouth.shape.O, mouthLerp));
      
      // Smile
      const smileAmount = riggedFace.mouth.shape.I * 0.7;
      Blendshape.setValue(PresetName.Joy, lerp(Blendshape.getValue(PresetName.Joy) || 0, smileAmount, mouthLerp));
      try {
        Blendshape.setValue(PresetName.Fun, lerp(Blendshape.getValue(PresetName.Fun) || 0, smileAmount, mouthLerp));
      } catch(e) {}
    }
    
    // Pupils
    if (this.vrm.lookAt) {
      const lerp = Kalidokit.Vector.lerp;
      const lookTarget = new THREE.Euler(
        lerp(this.oldLookTarget.x, riggedFace.pupil.y, 0.4),
        lerp(this.oldLookTarget.y, riggedFace.pupil.x, 0.4),
        0,
        "XYZ"
      );
      this.oldLookTarget.copy(lookTarget);
      this.vrm.lookAt.applyer.lookAt(lookTarget);
    }
  }
  
  // Apply pose (upper body)
  rigPose(riggedPose) {
    if (!this.vrm || !riggedPose) return;
    
    // Spine and Chest
    this.rigRotation("Chest", riggedPose.Spine, 0.15, 0.6);
    this.rigRotation("Spine", riggedPose.Spine, 0.2, 0.6);
    
    // Arms
    this.rigRotation("RightUpperArm", riggedPose.RightUpperArm, 1, 0.8);
    this.rigRotation("RightLowerArm", riggedPose.RightLowerArm, 1, 0.8);
    this.rigRotation("LeftUpperArm", riggedPose.LeftUpperArm, 1, 0.8);
    this.rigRotation("LeftLowerArm", riggedPose.LeftLowerArm, 1, 0.8);
  }
  
  // Apply hand/finger rotations
  rigHand(side, riggedHand, riggedPose) {
    if (!this.vrm || !riggedHand) return;
    
    const prefix = side === 'left' ? 'Left' : 'Right';
    
    // Wrist
    this.rigRotation(`${prefix}Hand`, {
      z: riggedPose?.[`${prefix}Hand`]?.z || 0,
      y: riggedHand[`${prefix}Wrist`]?.y || 0,
      x: riggedHand[`${prefix}Wrist`]?.x || 0
    }, 1, 0.8);
    
    // Fingers
    const fingers = ['Ring', 'Index', 'Middle', 'Thumb', 'Little'];
    const segments = ['Proximal', 'Intermediate', 'Distal'];
    
    fingers.forEach(finger => {
      segments.forEach(segment => {
        const boneName = `${prefix}${finger}${segment}`;
        if (riggedHand[boneName]) {
          this.rigRotation(boneName, riggedHand[boneName], 1, 0.8);
        }
      });
    });
  }
  
  // Update VRM
  update(delta) {
    if (this.vrm) {
      this.vrm.update(delta);
    }
  }
}

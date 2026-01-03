// ==================== MAIN APPLICATION ====================
// Main entry point that ties all modules together

import { Config } from './config.js';
import { SceneSetup } from './sceneSetup.js';
import { SceneObjects } from './sceneObjects.js';
import { VRMLoader } from './vrmLoader.js';
import { AvatarRig } from './avatarRig.js';
import { Tracking } from './tracking.js';

export class AvatarApp {
  constructor() {
    this.sceneSetup = null;
    this.sceneObjects = null;
    this.vrmLoader = null;
    this.avatarRig = null;
    this.tracking = null;
    
    // DOM elements
    this.canvas = document.getElementById('avatar-canvas');
    this.video = document.getElementById('webcam');
    this.debugVideo = document.getElementById('debug-video');
    this.loadingElement = document.getElementById('loading');
    this.loadingText = document.getElementById('loading-text');
    this.statusElement = document.getElementById('status');
  }
  
  async init() {
    try {
      // Setup Three.js scene
      this.updateLoading('Setting up 3D scene...');
      this.sceneSetup = new SceneSetup(this.canvas);
      this.sceneSetup.init();
      
      // Create scene objects
      this.sceneObjects = new SceneObjects(this.sceneSetup.scene);
      this.updateLoading('Loading environment...');
      await this.createEnvironmentObjects();
      
      // Setup camera
      this.updateLoading('Accessing camera...');
      await this.setupCamera();
      
      // Load VRM
      this.updateLoading('Loading avatar...');
      this.vrmLoader = new VRMLoader(this.sceneSetup.scene, (msg) => this.updateLoading(msg));
      const vrm = await this.vrmLoader.load();
      
      // Setup avatar rig
      this.avatarRig = new AvatarRig();
      this.avatarRig.setVRM(vrm);
      
      // Setup tracking
      this.updateLoading('Initializing tracking...');
      this.tracking = new Tracking(
        this.video, 
        this.avatarRig,
        (status) => this.updateStatus(status)
      );
      await this.tracking.init();
      
      // Start
      this.updateLoading('Starting...');
      await this.tracking.start();
      this.hideLoading();
      
      // Animation loop
      this.animate();
      
    } catch (error) {
      console.error('Initialization error:', error);
      this.updateLoading(`Error: ${error.message}`);
    }
  }
  
  async createEnvironmentObjects() {
    // Load house model from file
    try {
      // Load house with centerGeometry=true to fix built-in offset
      const houseModel = await this.sceneObjects.loadModel(
        'models/autumn_forest_wooden_house.glb',
        { x: -3, y: 0, z: -4 },  // Position: closer to avatar
        3.0,                      // Scale
        true                      // Center geometry (fix model offset)
      );
      
      console.log('House position:', houseModel.position);
      console.log('House model loaded and positioned on floor');
    } catch (e) {
      console.error('Could not load house model:', e);
    }
  }
  
  async setupCamera() {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: Config.camera
    });
    this.video.srcObject = stream;
    this.debugVideo.srcObject = stream;
    await new Promise(r => this.video.onloadedmetadata = r);
  }
  
  updateLoading(text) {
    if (this.loadingText) {
      this.loadingText.textContent = text;
    }
  }
  
  hideLoading() {
    if (this.loadingElement) {
      this.loadingElement.classList.add('hidden');
    }
  }
  
  updateStatus(text) {
    if (this.statusElement) {
      this.statusElement.textContent = `Tracking: ${text}`;
    }
  }
  
  animate() {
    requestAnimationFrame(() => this.animate());
    
    // Update controls and render
    this.sceneSetup.render();
    
    // Update VRM
    this.avatarRig.update(this.sceneSetup.getDelta());
  }
}

// Initialize on DOM ready
window.addEventListener('DOMContentLoaded', () => {
  const app = new AvatarApp();
  app.init();
});

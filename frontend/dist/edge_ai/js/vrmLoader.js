// ==================== VRM LOADER ====================
// Loads and configures VRM avatars

import { Config } from './config.js';

export class VRMLoader {
  constructor(scene, onProgress) {
    this.scene = scene;
    this.onProgress = onProgress;
  }
  
  async load(url = Config.vrmUrl) {
    const loader = new THREE.GLTFLoader();
    loader.crossOrigin = "anonymous";
    
    return new Promise((resolve, reject) => {
      loader.load(
        url,
        async (gltf) => {
          try {
            const vrm = await THREE_VRM.VRM.from(gltf);
            this.scene.add(vrm.scene);
            
            // Face camera
            vrm.scene.rotation.y = Math.PI;
            
            // Position on floor
            vrm.scene.position.set(0, 0, 0);
            
            // Enable shadows
            vrm.scene.traverse((obj) => {
              if (obj.isMesh) {
                obj.castShadow = true;
                obj.receiveShadow = true;
              }
            });
            
            resolve(vrm);
          } catch (e) {
            reject(e);
          }
        },
        (progress) => {
          if (this.onProgress && progress.total > 0) {
            const percent = Math.round(progress.loaded / progress.total * 100);
            this.onProgress(`Loading avatar... ${percent}%`);
          }
        },
        reject
      );
    });
  }
}

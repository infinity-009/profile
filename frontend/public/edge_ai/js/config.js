// ==================== CONFIGURATION ====================
// Central configuration for the avatar application

export const Config = {
  // VRM Model URL
  vrmUrl: 'https://cdn.glitch.global/29e07830-2317-4b15-a044-135e73c7f840/AliciaSolid.vrm?v=1692567174619',
  
  // Camera settings
  camera: {
    width: 640,
    height: 480,
    facingMode: 'user'
  },
  
  // Tracking sensitivity
  tracking: {
    smoothAmount: 0.1,      // Lower = faster response
    positionSmooth: 0.1,
    deadZone: 0.002,        // Minimum movement threshold
    defaultLerpAmount: 0.7  // Bone rotation interpolation
  },
  
  // MediaPipe Holistic settings
  holistic: {
    modelComplexity: 1,
    smoothLandmarks: true,
    minDetectionConfidence: 0.7,
    minTrackingConfidence: 0.7,
    refineFaceLandmarks: true
  },
  
  // Scene settings
  scene: {
    backgroundColor: 0x000000,
    floorColor: 0x555555,
    floorSize: 20,
    gridDivisions: 40
  },
  
  // Lighting settings
  lighting: {
    directional: { color: 0xffffff, intensity: 0.7 },
    front: { color: 0xffffff, intensity: 0.4 },
    ambient: { color: 0xffffff, intensity: 0.5 },
    back: { color: 0x6699cc, intensity: 0.3 }
  },
  
  // Stars settings
  stars: {
    count: 1000,
    size: 0.1
  }
};

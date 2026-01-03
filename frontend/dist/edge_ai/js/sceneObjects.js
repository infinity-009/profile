// ==================== SCENE OBJECTS ====================
// 3D objects for the scene (house, trees, etc.)

export class SceneObjects {
  constructor(scene) {
    this.scene = scene;
  }
  
  // Create a detailed procedural house
  createHouse(x, y, z) {
    const houseGroup = new THREE.Group();
    
    // Main house body
    const bodyGeometry = new THREE.BoxGeometry(2, 1.5, 2);
    const bodyMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xd4a574,  // Warm beige/tan
      roughness: 0.8 
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0.75;
    body.castShadow = true;
    body.receiveShadow = true;
    houseGroup.add(body);
    
    // Roof (pyramid shape)
    const roofGeometry = new THREE.ConeGeometry(1.6, 1, 4);
    const roofMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x8b4513,  // Brown roof
      roughness: 0.7 
    });
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.y = 2;
    roof.rotation.y = Math.PI / 4;
    roof.castShadow = true;
    houseGroup.add(roof);
    
    // Door
    const doorGeometry = new THREE.BoxGeometry(0.4, 0.8, 0.05);
    const doorMaterial = new THREE.MeshStandardMaterial({ color: 0x4a3728 });
    const door = new THREE.Mesh(doorGeometry, doorMaterial);
    door.position.set(0, 0.4, 1.025);
    houseGroup.add(door);
    
    // Windows
    const windowGeometry = new THREE.BoxGeometry(0.3, 0.3, 0.05);
    const windowMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x87ceeb,
      emissive: 0x87ceeb,
      emissiveIntensity: 0.3
    });
    
    const window1 = new THREE.Mesh(windowGeometry, windowMaterial);
    window1.position.set(-0.5, 1, 1.025);
    houseGroup.add(window1);
    
    const window2 = new THREE.Mesh(windowGeometry, windowMaterial);
    window2.position.set(0.5, 1, 1.025);
    houseGroup.add(window2);
    
    // Chimney
    const chimneyGeometry = new THREE.BoxGeometry(0.3, 0.6, 0.3);
    const chimneyMaterial = new THREE.MeshStandardMaterial({ color: 0x8b0000 });
    const chimney = new THREE.Mesh(chimneyGeometry, chimneyMaterial);
    chimney.position.set(0.6, 2.3, -0.5);
    chimney.castShadow = true;
    houseGroup.add(chimney);
    
    houseGroup.position.set(x, y, z);
    this.scene.add(houseGroup);
    return houseGroup;
  }
  
  // Create a detailed procedural tree
  createTree(x, y, z) {
    const treeGroup = new THREE.Group();
    
    // Tree trunk
    const trunkGeometry = new THREE.CylinderGeometry(0.1, 0.15, 1, 8);
    const trunkMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x4a3728,
      roughness: 0.9 
    });
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.y = 0.5;
    trunk.castShadow = true;
    treeGroup.add(trunk);
    
    // Foliage layers
    const foliageMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x228b22,
      roughness: 0.8 
    });
    
    const layers = [
      { radius: 0.7, height: 0.8, y: 1.2 },
      { radius: 0.55, height: 0.7, y: 1.7 },
      { radius: 0.4, height: 0.6, y: 2.1 }
    ];
    
    layers.forEach(layer => {
      const geometry = new THREE.ConeGeometry(layer.radius, layer.height, 8);
      const foliage = new THREE.Mesh(geometry, foliageMaterial);
      foliage.position.y = layer.y;
      foliage.castShadow = true;
      treeGroup.add(foliage);
    });
    
    treeGroup.position.set(x, y, z);
    this.scene.add(treeGroup);
    return treeGroup;
  }
  
  // Create a fence
  createFence(x, y, z, length = 4, direction = 'x') {
    const fenceGroup = new THREE.Group();
    const postMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    const railMaterial = new THREE.MeshStandardMaterial({ color: 0xa0522d });
    
    const postCount = Math.ceil(length / 0.5) + 1;
    
    for (let i = 0; i < postCount; i++) {
      const postGeometry = new THREE.BoxGeometry(0.08, 0.6, 0.08);
      const post = new THREE.Mesh(postGeometry, postMaterial);
      post.position.y = 0.3;
      if (direction === 'x') {
        post.position.x = i * 0.5;
      } else {
        post.position.z = i * 0.5;
      }
      post.castShadow = true;
      fenceGroup.add(post);
    }
    
    // Rails
    const railGeometry = new THREE.BoxGeometry(
      direction === 'x' ? length : 0.05, 
      0.05, 
      direction === 'z' ? length : 0.05
    );
    
    const topRail = new THREE.Mesh(railGeometry, railMaterial);
    topRail.position.set(
      direction === 'x' ? length / 2 : 0, 
      0.5, 
      direction === 'z' ? length / 2 : 0
    );
    fenceGroup.add(topRail);
    
    const bottomRail = new THREE.Mesh(railGeometry, railMaterial);
    bottomRail.position.set(
      direction === 'x' ? length / 2 : 0, 
      0.2, 
      direction === 'z' ? length / 2 : 0
    );
    fenceGroup.add(bottomRail);
    
    fenceGroup.position.set(x, y, z);
    this.scene.add(fenceGroup);
    return fenceGroup;
  }
  
  // Load external GLTF model
  async loadModel(url, position = { x: 0, y: 0, z: 0 }, scale = 1, centerGeometry = false) {
    const loader = new THREE.GLTFLoader();
    
    return new Promise((resolve, reject) => {
      loader.load(
        url,
        (gltf) => {
          const model = gltf.scene;
          model.scale.set(scale, scale, scale);
          
          // If centerGeometry is true, offset the model to center its bounding box at origin
          if (centerGeometry) {
            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            // Move all children to counter the offset
            model.position.set(-center.x, -box.min.y, -center.z);
          }
          
          // Create a wrapper group for proper positioning
          const wrapper = new THREE.Group();
          wrapper.add(model);
          wrapper.position.set(position.x, position.y, position.z);
          
          wrapper.traverse((obj) => {
            if (obj.isMesh) {
              obj.castShadow = true;
              obj.receiveShadow = true;
            }
          });
          this.scene.add(wrapper);
          resolve(wrapper);
        },
        undefined,
        reject
      );
    });
  }
}

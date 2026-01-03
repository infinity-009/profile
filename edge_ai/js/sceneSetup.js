// ==================== SCENE SETUP ====================
// Three.js scene, camera, renderer, lighting setup

import { Config } from './config.js';

export class SceneSetup {
  constructor(canvas) {
    this.canvas = canvas;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.clock = null;
  }
  
  init() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Scene
    this.scene = new THREE.Scene();
    
    // Camera
    this.camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 1000);
    this.camera.position.set(0, 1.4, 4);
    
    // Renderer
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(Config.scene.backgroundColor, 1);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // OrbitControls - extended range to see full scene
    this.controls = new THREE.OrbitControls(this.camera, this.canvas);
    this.controls.target.set(0, 0.9, 0);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.minDistance = 0.5;   // Can zoom in closer
    this.controls.maxDistance = 100;   // Can zoom out much further
    this.controls.maxPolarAngle = Math.PI / 2 + 0.5;  // Can look more below
    this.controls.update();
    
    // Clock
    this.clock = new THREE.Clock();
    
    // Setup lighting
    this.setupLighting();
    
    // Setup environment
    this.setupEnvironment();
    
    // Resize handler
    window.addEventListener('resize', () => this.onResize());
    
    return this;
  }
  
  setupLighting() {
    const { lighting } = Config;
    
    // Main directional light
    const directionalLight = new THREE.DirectionalLight(lighting.directional.color, lighting.directional.intensity);
    directionalLight.position.set(2, 4, 2);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 0.1;
    directionalLight.shadow.camera.far = 10;
    directionalLight.shadow.camera.left = -5;
    directionalLight.shadow.camera.right = 5;
    directionalLight.shadow.camera.top = 5;
    directionalLight.shadow.camera.bottom = -5;
    this.scene.add(directionalLight);
    
    // Front fill light
    const frontLight = new THREE.DirectionalLight(lighting.front.color, lighting.front.intensity);
    frontLight.position.set(0, 2, 4);
    this.scene.add(frontLight);
    
    // Ambient light
    this.scene.add(new THREE.AmbientLight(lighting.ambient.color, lighting.ambient.intensity));
    
    // Back light
    const backLight = new THREE.DirectionalLight(lighting.back.color, lighting.back.intensity);
    backLight.position.set(-1, 2, -2);
    this.scene.add(backLight);
  }
  
  setupEnvironment() {
    // Stars
    this.createStars();
    
    // Floor
    this.createFloor();
    
    // Grid
    this.createGrid();
    
    // Shadow ground
    this.createShadowGround();
  }
  
  createStars() {
    const { stars } = Config;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(stars.count * 3);
    
    for (let i = 0; i < stars.count * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 100;
      starPositions[i + 1] = Math.random() * 50 + 5;
      starPositions[i + 2] = (Math.random() - 0.5) * 100;
    }
    
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: stars.size, sizeAttenuation: true });
    const starField = new THREE.Points(starGeometry, starMaterial);
    this.scene.add(starField);
  }
  
  createFloor() {
    const { scene: sceneConfig } = Config;
    const floorGeometry = new THREE.PlaneGeometry(sceneConfig.floorSize, sceneConfig.floorSize);
    const floorMaterial = new THREE.MeshStandardMaterial({ 
      color: sceneConfig.floorColor,
      roughness: 0.8,
      metalness: 0.2
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;
    floor.receiveShadow = true;
    this.scene.add(floor);
  }
  
  createGrid() {
    const { scene: sceneConfig } = Config;
    const gridHelper = new THREE.GridHelper(sceneConfig.floorSize, sceneConfig.gridDivisions, 0x888888, 0x444444);
    gridHelper.position.y = 0.01;
    this.scene.add(gridHelper);
  }
  
  createShadowGround() {
    const groundGeometry = new THREE.PlaneGeometry(12, 12);
    const groundMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0.02;
    ground.receiveShadow = true;
    this.scene.add(ground);
  }
  
  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
  
  render() {
    if (this.controls) {
      this.controls.update();
    }
    this.renderer.render(this.scene, this.camera);
  }
  
  getDelta() {
    return this.clock.getDelta();
  }
}

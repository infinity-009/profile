# 3D Avatar Motion Capture

Real-time 3D avatar that mirrors your movements using your webcam.

## Demo

🔗 **[Live Demo](https://infinity-009.github.io/edge_ai/)**

## Versions

| File | Description |
|------|-------------|
| `index.html` | Face-only tracking (lighter) |
| `index_v2.html` | **Full body + hands** (recommended) |
| `index_v3.html` | **Head + Hands** (no body movement) |

## Features

### v1 (index.html)
- 🎭 **Face tracking** with MediaPipe Face Mesh (468 landmarks)
- 🗣️ **Lip sync** - avatar mouth moves when you speak
- 😉 **Eye blink** tracking
- 🔄 **Head rotation** follows your movements

### v2 (index_v2.html) ⭐ NEW
- 🕺 **Full body tracking** - torso, arms, legs
- 🖐️ **Hand & finger tracking** - all 10 fingers
- 🎭 **Face + expressions** - blink, mouth, eyebrows
- 💾 **Model caching** - loads instantly after first visit
- 🎯 **Smoothing** - reduced jitter for accurate movements
- 📺 **Debug preview** - see your camera feed

### v3 (index_v3.html)
- 🎭 **Face tracking** - same as v1
- 🖐️ **Hand & Arm tracking** - arms and fingers move
- 🗿 **Static Body** - torso and legs stay still (good for desk usage)

## Usage

### v1 (Face Only)
1. Open `index.html` in a browser
2. Allow camera access
3. Move your head, speak, blink - the avatar follows!

### v2 (Full Body)
1. Open `index_v2.html` in a browser
2. Allow camera access
3. **Stand back** so your full body is visible
4. Dance, wave, speak - the avatar copies everything!

## Tech Stack

- [Three.js](https://threejs.org/) - 3D rendering
- [three-vrm](https://github.com/pixiv/three-vrm) - VRM avatar support
- [MediaPipe Holistic](https://google.github.io/mediapipe/) - Full body tracking
- [Kalidokit](https://github.com/yeemachine/kalidokit) - Motion extraction
- **IndexedDB** - Model caching

## License

MIT

# Golden Labrador Retriever (Camp Companion)

- **Origin:** 100% original procedural & sculpted 3D character created for Moonriver 3.0 using Blender 5.3.0 (`scripts/blender/build-dog-hero.py`).
- **Author:** Mallikarjun Reddy (Moonriver project original)
- **License:** Creative Commons Zero 1.0 Universal (CC0-1.0), https://creativecommons.org/publicdomain/zero/1.0/
- **Provenance Status:** Verified clean original (replaces the earlier flagged Sketchfab/cotw upload; zero third-party meshes, textures, skeletons, or animation data).

## Build & Asset Summary

- **Mesh:** 20,132 triangles (`10,116` vertices), single unified `SkinnedMesh` (`LabradorHero`) facing `+Z`, `1.473 m` nose-to-tail length, `0.809 m` head height, paws grounded at `y = 0.000 m`.
- **PBR Maps:** Cycles-baked (CUDA + CPU OpenImageDenoise) single material (`LabradorCoat`) — `2048x2048` sRGB Albedo WebP, `1024x1024` tangent-space Normal WebP, and `1024x1024` linear ORM WebP (`R=AO`, `G=Roughness`, `B=Metallic`), geometry compressed via `EXT_meshopt_compression` (`1.65 MB`).
- **Rig & Animations:** 30-bone quadruped skeleton exposing `Head`, `Neck`, `Tail01`, `Tail02`, `Spine2` and 4 IK-ready leg chains (`FrontUpLegL/R`, `FrontLowLegL/R`, `FrontPawL/R`, `BackUpLegL/R`, `BackLowLegL/R`, `BackPawL/R`), with all 20 authored skeletal animation clips (`walk`, `walkLeft`, `walkRight`, `trot`, `idle`, `lieBreathe`, `lieBreathe2`, `lieToIdle`, `sitToIdle`, `toSit`, `sitToLie`, `toLie`, `sniff`, `smellAir`, `shake`, `shuffleLeft`, `shuffleRight`, `sitScratch`, `paw`, `pet`).

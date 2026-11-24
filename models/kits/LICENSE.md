# Moonriver Kit 3D Models — CC0 Attribution & Provenance

All 3D photogrammetry scans in `public/models/kits/` originate from [Poly Haven](https://polyhaven.com/) under the **CC0 1.0 Universal (Public Domain Dedication)** license (`https://creativecommons.org/publicdomain/zero/1.0/`).

Processing pipeline: `scripts/blender/bake-kit-assets.py` (Blender 5.3.0 decimation to LOD0/LOD1, weighted normals, ground pivot `min.y = 0`, Cycles CUDA baked smooth vertex AO in `COLOR_0`) + `scripts/blender/pack-kit-assets.mjs` (1K Lanczos textures with normal re-normalization, Basis KTX2 compression, `EXT_meshopt_compression`).

| Asset ID | Name | Authors | Source | LOD0 / LOD1 Tris | File Size | License |
|---|---|---|---|---|---|---|
| `namaqualand_cliff_01` | Namaqualand Cliff 01 | Jenelle van Heerden (Photography), Rico Cilliers (modeling) | https://polyhaven.com/a/namaqualand_cliff_01 | 16,000 / 3,400 | 1.94 MB | CC0-1.0 |
| `namaqualand_cliff_02` | Namaqualand Cliff 02 | Dario Barresi (Photography), Rico Cilliers (modeling) | https://polyhaven.com/a/namaqualand_cliff_02 | 18,000 / 3,798 | 2.08 MB | CC0-1.0 |
| `rock_face_02` | Rock Face 02 | Dario Barresi, Rico Cilliers (processing) | https://polyhaven.com/a/rock_face_02 | 9,999 / 2,200 | 1.96 MB | CC0-1.0 |
| `rock_moss_set_02` | Rock Moss Set 02 | Kless Gyzen | https://polyhaven.com/a/rock_moss_set_02 | 16,799 / 3,638 | 1.64 MB | CC0-1.0 |
| `pine_roots` | Pine Roots | Rob Tuytel | https://polyhaven.com/a/pine_roots | 16,998 / 3,597 | 3.89 MB | CC0-1.0 |
| `dead_tree_trunk` | Dead Tree Trunk | Rob Tuytel | https://polyhaven.com/a/dead_tree_trunk | 13,999 / 2,999 | 1.89 MB | CC0-1.0 |

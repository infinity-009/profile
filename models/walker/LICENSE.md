# Walker figures

## male.glb

Built by scripts/prepare-walker-male.mjs from the Microsoft Rocketbox avatar library
(https://github.com/microsoft/Microsoft-Rocketbox), released under the MIT License:

    MIT License

    Copyright (c) 2020 Microsoft

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

Used: Assets/Avatars/Adults/Male_Adult_08 and the clips m_idle_neutral_01, m_walk_neutral_01 and
m_run_fast_01 (downloaded 6 October 2026). Changes: converted from FBX to glTF; clips reduced to
rotations plus the root's height, root motion removed; textures 1024² WebP; meshopt compression.

## female.glb

Built by scripts/prepare-walker.mjs from three free packs by Quaternius (https://quaternius.com),
each released under CC0 1.0 Universal (public domain), as stated in the License_Standard.txt / License.txt
shipped in each download (checked 4 October 2026):

- Modular Character Outfits - Fantasy [Standard] — https://quaternius.itch.io/modular-character-outfits-fantasy (Ranger outfit)
- Universal Base Characters [Standard] — https://quaternius.itch.io/universal-base-characters (heads, eyes, eyebrows, hair)
- Universal Animation Library [Standard] — https://quaternius.itch.io/universal-animation-library (idle, walk, jog)

Changes: hood and shoulder plates left off; the head cut from the base body and re-bound to the outfit's
skeleton; clips reduced to rotations plus scaled pelvis height; textures 1024² WebP; meshopt compression.

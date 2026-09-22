import { access, cp, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const frontend = fileURLToPath(new URL('..', import.meta.url));
const systemDesign = process.env.SYSTEM_DESIGN_DIR
  ? resolve(process.env.SYSTEM_DESIGN_DIR)
  : resolve(frontend, '../../../work/system_design');
const source = resolve(systemDesign, 'dist');
const target = resolve(frontend, 'dist/system-design');

let hasLocalSource = false;
try {
  await access(source);
  hasLocalSource = true;
} catch {
  // If dist doesn't exist, check if the repo exists and we can build it
  try {
    await access(resolve(systemDesign, 'package.json'));
    console.log(`Building System Design at ${systemDesign}...`);
    execSync(`npm --prefix "${systemDesign}" run build`, { stdio: 'inherit' });
    hasLocalSource = true;
  } catch {
    hasLocalSource = false;
  }
}

if (hasLocalSource) {
  await rm(target, { recursive: true, force: true });
  await cp(source, target, { recursive: true });
  console.log(`Included System Design build from local source at ${target}.`);
} else {
  // Fallback: preserve system-design from origin/gh-pages
  try {
    const repoRoot = resolve(frontend, '..');
    console.log('Local system_design source not found. Preserving system-design from origin/gh-pages...');
    execSync(`git archive origin/gh-pages system-design | tar -x -C "${resolve(frontend, 'dist')}"`, {
      cwd: repoRoot,
      stdio: 'inherit'
    });
    console.log(`Preserved System Design build from origin/gh-pages at ${target}.`);
  } catch (err) {
    console.warn(`Warning: Could not preserve system-design from gh-pages: ${err.message}`);
  }
}

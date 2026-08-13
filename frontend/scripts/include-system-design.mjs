import { access, cp, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const frontend = fileURLToPath(new URL('..', import.meta.url));
const systemDesign = process.env.SYSTEM_DESIGN_DIR
  ? resolve(process.env.SYSTEM_DESIGN_DIR)
  : resolve(frontend, '../../../system_design');
const source = resolve(systemDesign, 'dist');
const target = resolve(frontend, 'dist/system_design');

try {
  await access(source);
} catch {
  throw new Error(`System Design build not found at ${source}. Build it first or set SYSTEM_DESIGN_DIR.`);
}

await rm(target, { recursive: true, force: true });
await cp(source, target, { recursive: true });
console.log(`Included System Design build at ${target}.`);

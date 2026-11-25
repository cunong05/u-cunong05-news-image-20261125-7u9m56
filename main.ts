import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const root = dirname(fileURLToPath(import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(root, "entry.png");
const data = readFileSync(source);
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!data.subarray(0, 8).equals(pngMagic)) throw new Error("entry.png is not a PNG");
if (statSync(source).size > 1048576) throw new Error("entry.png exceeds 1 MiB");
const width = data.readUInt32BE(16);
const height = data.readUInt32BE(20);
if (width > 1024 || height > 1024) throw new Error("entry.png exceeds 1024x1024");
const destination = join(out, "entry.png");
mkdirSync(out, { recursive: true });
try {
  copyFileSync(source, destination);
} catch (err) {
  console.error(`copy failed: ${(err as Error).message}`);
  process.exit(1);
}
const written = readFileSync(destination);
if (!written.equals(data)) throw new Error("output bytes differ from entry.png");
console.log(`wrote ${destination} (${written.length} bytes, ${width}x${height})`);

// The Battery's Last Text to Its Charger — entry #137.
// Writes the battery's final one-line text message to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "i waited all day while you doomscrolled me down to 1% for a video of a man yelling at a cake. tell the charger i forgive him. you, never.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);

// The Battery's Last Text to Its Charger — entry #137.
// Writes the battery's final one-line text message to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "i waited all day while you doomscrolled me down to 1% for a video of a man yelling at a cake. tell the charger i forgive him. you, never.";

// The gate allows 1 to 200 characters; refuse to write an over-long line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line is ${LINE.length} characters, must be 1-200`);
}
if (LINE.includes("\n")) {
  throw new Error("line must be a single line");
}

const outDir = "/output";
const outFile = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
const text = LINE + "\n";
writeFileSync(outFile, text, "utf8");
console.log(
  `wrote ${LINE.length} characters (${Buffer.byteLength(text, "utf8")} bytes) to ${outFile}`,
);

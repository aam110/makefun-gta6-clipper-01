// Entry program for the gta6-clipper-01 bounty.
//
// All this program does is hand the house our video pointer: it copies
// VIDEO.json from the repository root into the output directory. It uses
// only the Node standard library, touches no network, reads no clock, and
// writes the exact same bytes on every run.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const videoFile = "VIDEO.json";

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(join(botDir, videoFile), join(outputDir, videoFile));
} catch (error) {
  console.error(
    `failed to copy ${videoFile}: ${error instanceof Error ? error.message : String(error)}`,
  );
  process.exit(1);
}

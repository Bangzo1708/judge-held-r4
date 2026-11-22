import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "In the last light of the day, dust is falling through the room so slowly you could follow one mote all the way down. It is in no hurry at all, and for a moment, neither are you.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");

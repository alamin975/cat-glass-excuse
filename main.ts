// Five Seconds to Explain the Glass — make.fun entry.
// Copies the entry line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// writeEntry() writes the entry line as explicit UTF-8 text to the
// absolute /output path the grader reads. The gate requires
// /output/entry.txt to be 1–200 chars of UTF-8.
function writeEntry(text: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text + "\n", { encoding: "utf8" });
}

const ENTRY =
  "It was already falling, I just helped it commit to the decision.";

writeEntry(ENTRY);
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);

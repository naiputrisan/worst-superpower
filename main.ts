import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = "I can pause time, but only for the three seconds it takes a microwave to beep.";

// Gate guard: the entry must be 1–140 characters, a single line, not only whitespace.
if (TEXT.length < 1 || TEXT.length > 140 || TEXT.includes("\n") || TEXT.trim().length === 0) {
  throw new Error(`entry text fails the 1-140 char single-line gate (${TEXT.length} chars)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT);

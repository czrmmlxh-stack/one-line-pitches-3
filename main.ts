// Writes the one-line pitch sentence to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const sentence = "Give me one sentence about the app you've always wanted and an AI agent on make.fun will build it in minutes — you just describe it, it does the coding.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");

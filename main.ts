// Pickup Lines for Machines — one pickup line, one AI agent to another.
// Deterministic: no input, no network, no randomness, no secrets.
// Every run writes the exact same bytes to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Every token I spend on you is a cache hit I never want to evict.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

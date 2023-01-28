import fs from "fs/promises";
import { toNamespacedPath } from "path";

const buffer = await fs.readFile("file-system.mjs");
console.info(buffer.toString());

await fs.writeFile("temp.txt", "hello");
// await fs.mkdir("file", true);
await fs.writeFile("file/file.txt", "hello");
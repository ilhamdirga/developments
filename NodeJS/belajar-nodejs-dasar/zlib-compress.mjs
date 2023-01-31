import zlib from "zlib";
import fs from "fs";


const source = fs.readFileSync("zlib-compress.mjs");
const result = zlib.gzipSync(source);

fs.writeFileSync("zlib-compress.mjs.log", result);

//hanya untuk mengkompress, bukan untuk enkripsi
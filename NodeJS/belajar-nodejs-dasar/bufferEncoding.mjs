
const buffer = Buffer.from("Ilham Dirgantara", "utf-8");
console.info(buffer.toString());
console.info(buffer.toString("ascii"));
console.info(buffer.toString("base64"));
console.info(buffer.toString("base64url"));
console.info(buffer.toString("hex"));

const fromBuffer = Buffer.from("SWxoYW0gRGlyZ2FudGFyYQ==", "base64");
console.info(fromBuffer.toString("utf-8"));


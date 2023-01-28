import fs from "fs";

// const writer = fs.createWriteStream("target.log");

// writer.write("ilham\n");
// writer.write("Dirgantara\n");
// writer.write("Laksana\n");
// writer.write("Pamungkas\n");
// writer.end();

const reader = fs.createReadStream("target.log");

reader.addListener("data", (data) => {
    console.info(data.toString());
})




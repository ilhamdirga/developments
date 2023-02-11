import fs from "fs";

export const writefile = (file, content) => {
    fs.writeFileSync(file, content);
}
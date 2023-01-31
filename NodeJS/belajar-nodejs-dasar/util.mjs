import util from "util";

const name = "ilham";
console.info(`Hello ${name}`);

console.info(util.format("Hello %s", name));

const nama = {
    firstName: "Ilham",
    lastName: "Dirgantara",
}

console.info(util.format("person : %j", nama));
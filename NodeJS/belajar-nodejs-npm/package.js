import {hello, sum} from "belajar-nodejs-npm-library-dirgan";
import {max, min} from "belajar-nodejs-npm-library-dirgan/filter";

console.info(hello("ilham"));

const numbers = [1,2,3,4,5];
console.info(sum(numbers));

console.info(min(1,2));
console.info(max(1,2));
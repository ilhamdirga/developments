import {URL} from "url";

const pzn = new URL("https://www.programmerzamannow.com/belajar?kelas=nodejs");

pzn.hostname = "www.dirgantara.com";
pzn.searchParams.append("status", "premium");

console.info(pzn.toString());
console.info(pzn.href);
console.info(pzn.protocol);
console.info(pzn.hostname);
console.info(pzn.pathname);
console.info(pzn.searchParams);

import dns from "dns/promises";

const addres = await dns.lookup("www.programmerzamannow.com");

console.info(addres);
console.info(addres.address);
console.info(addres.family);
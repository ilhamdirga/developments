function samplePromise(){
    return Promise.resolve("Ilham");
}

const name = await samplePromise();
console.info(name);
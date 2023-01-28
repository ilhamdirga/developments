function samplePromise(){
    return Promise.resolve("Ilham");
}

async function run(){
    const nama = await samplePromise();
    console.info(nama);
}

run();
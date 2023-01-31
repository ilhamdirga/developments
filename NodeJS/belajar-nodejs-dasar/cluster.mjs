import cluster from "cluster";
import process from "process";
import os from "os";
import http from "http";


if(cluster.isPrimary){

    for(let i = 0; i < os.cpus().length; i++){
        cluster.fork();
    }

    cluster.addListener("exit", (worker)=>{
        console.info(`Worker-${worker.id} is exit`);
        cluster.fork();
    })
}

if(cluster.isWorker){
   
    const server = http.createServer((request, response) => {
        response.write(`Response from process ${process.pid}`);
        response.end();
        process.exit();
    })
    
    server.listen(3000);
    // console.info(`Start cluster worker ${process.pid}`);
    console.info(`worker : ${process.pid}`)
}
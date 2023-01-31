import {threadId, Worker} from "worker_threads";

const worker1 = new Worker("./worker.mjs");
const worker2 = new Worker("./worker.mjs");

worker1.addListener("message", (message) => {
    console.info(`Thread-${threadId} receive data from worker-${message}`);
})
worker2.addListener("message", (message) => {
    console.info(`Thread-${threadId} receive data from worker-${message}`);
})


worker1.postMessage(2);
worker2.postMessage(2);

import timers from "timers/promises";

// await timers.setTimeout(1000);
// console.info(new Date());`

for await(const startTime of timers.setInterval(1000, "")){
    console.info(`Start time at ${new Date()}`);
}
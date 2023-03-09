import winston, { debug } from "winston";

test("learn logging levels", () => {
    const logger = winston.createLogger({
        level: "debug",
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.log({level: "error", message: "Hello Error"});
    logger.log({level: "warn", message: "Hello Warn"});
    logger.log({level: "info", message: "Hello Info"});
    logger.log({level: "http", message: "Hello HTTP"});
    logger.log({level: "verbose", message: "Hello Verbose"});
    logger.log({level: "debug", message: "Hello Debug"});
    logger.log({level: "silly", message: "Hello Silly"});
})

test("create logger format", () => {
    const logger = winston.createLogger({
        level: "info",
        format: winston.format.simple(),
        // format: winston.format.logstash(),
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.error("Hello Error");
   
})

test("create logger format printf", () => {
    const logger = winston.createLogger({
        level: "info",
        // format: winston.format.simple(),
        // format: winston.format.logstash(),
        format: winston.format.printf(log => {
            return `${new Date()} => ${log.level.toUpperCase()} : ${log.message}`
        }),
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.error("Hello Error");
    logger.warn("Hello Warn");
    logger.info("Hello info");
   
})
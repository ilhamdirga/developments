import winston from "winston";

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
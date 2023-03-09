import winston from "winston";

test("learn logging levels", () => {
    const logger = winston.createLogger({
        level: "info",
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.simple()
        ),
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.info("Hello Info")
    logger.info("Hello Info")
    logger.info("Hello Info")
})
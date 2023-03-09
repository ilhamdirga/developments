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
            new winston.transports.Console({}),
            new winston.transports.File({
                level: "info",
                filename: "application-info.log"
            }),
            new winston.transports.File({
                level: "error",
                filename: "application-error.log"
            })
        ]
    });

    logger.info("Hello Info")
    logger.info("Hello Info")
    logger.info("Hello Info")
    logger.error("Hello Error")
    logger.error("Hello Error")
    logger.error("Hello Error")
})
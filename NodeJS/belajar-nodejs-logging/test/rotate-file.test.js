import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

test("learn logging rotate", () => {
    const logger = winston.createLogger({
        level: "info",
        transports: [
            new winston.transports.Console({}),
            new DailyRotateFile({
                filename: `app-%DATE%.log`,
                zippedArchive: true,
                maxSize: '100m',
                maxFiles: '14d'
            })
        ]
    });

    for(let i = 0; i < 100000; i++){
        logger.info(`Hello Info ${i}`)
    }

})
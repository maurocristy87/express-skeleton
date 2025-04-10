import "reflect-metadata";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import router from "./routes";
import { Exception } from "@exception/Exception";

export const bootstrap = () => {
    const app = express();
    const PORT = process.env.PORT || 3000;

    app.use(express.json());
    app.use(
        cors({
            origin: process.env.CORS_ALLOWED_ORIGIN || "*",
            methods: ["POST", "PUT", "GET", "DELETE", "OPTIONS", "PATCH"],
        }),
    );
    app.use(router);

    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        if (err instanceof Exception) {
            res.status(err.code).send({
                error: err.message,
            });
        } else {
            res.status(500).send("Something went wrong");
        }
    });

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

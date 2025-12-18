import express, { NextFunction } from "express";
import { Request, Response } from "express";
import { routes } from "./Routes/rotas";
import { AppError } from "./errors/AppError";
const app = express()

app.use(express.json())

app.use("/tasks", routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: "error",
            message: err.message
        })
    }
    return res.status(500).json({
        status: "error",
        message: `Internal Server Error - ${err.message}`
    })
} )

app.listen(3000, () => {
    console.log("O servidor está rodando na porta 3000")
})
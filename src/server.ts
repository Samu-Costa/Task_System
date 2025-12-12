import express from "express";
import { routes } from "./Routes/rotas";
const app = express()

app.use(express.json())

app.use("/tasks", routes);

app.listen(3000, () => {
    console.log("O servidor está rodando na porta 3000")
})
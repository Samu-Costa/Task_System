import { Request , Response } from "express";
import { deleteTaskUseCase } from "./deleteTaskUseCase";

export class deleteTaskController{
    async handle (req: Request, res: Response){
        const id = Number(req.params.id);
        const deleteTask = new deleteTaskUseCase();

        await deleteTask.execute(id);

        return res.status(204);

    }
}
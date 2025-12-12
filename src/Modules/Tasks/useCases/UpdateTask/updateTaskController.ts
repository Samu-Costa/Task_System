import { Request , Response } from "express";
import { updateTaskUseCase } from "./updateTaskUseCase";
export class updateTaskController{
    async handle (req: Request, res: Response){
        const id = Number(req.params.id);

        const UpdateTaskUseCase = new updateTaskUseCase();
        const { title, description} = req.body;

        const result = await UpdateTaskUseCase.execute({ id , title, description});

        return res.status(200).json(result)
    } 
}
import { CreateTaskDTO } from "../DTOs/CreateTaskDTO";
import { CreateTaskUseCase } from "./CreateTaskUseCase";
import { Request, Response } from "express";
export class CreateTaskController{
    async handle (req: Request, res: Response){
        const {title , description} = req.body;

        const createTaskUseCase = new CreateTaskUseCase();

        const result = await createTaskUseCase.execute({title,description})

        return res.status(201).json(result)
    }
}
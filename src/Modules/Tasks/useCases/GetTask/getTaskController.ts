
import { getTaskUseCase } from "./getTaskUseCase";
import { Request, Response } from "express";
export class getTaskController{
    async handle (req: Request, res: Response){

        const createTaskUseCase = new getTaskUseCase();

        const result = await createTaskUseCase.execute()

        return res.status(200).json(result)
    }
}
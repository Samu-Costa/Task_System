import { PrismaClient, Task } from "../../../../generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { updateTaskDTO } from "../../DTOs/UpdateTaskDTO";
import { AppError } from "../../../../errors/AppError";


const adapter = new PrismaBetterSqlite3({url: "file:./dev.db"})
const prisma = new PrismaClient({ adapter });
export class updateTaskUseCase{
    async execute ({id, title, description} : updateTaskDTO): Promise<Task>{

        const taskExists = await prisma.task.findUnique({
            where: { id }
        });

        if(!taskExists){
            throw new AppError ("Task não Existe na base de dados");
        }
        
       const updateTask = await prisma.task.update({
        where: {
            id
        },
        data: {
            title,
            description
        }
       })
       
       return updateTask;
    }
}
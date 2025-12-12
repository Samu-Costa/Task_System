import { PrismaClient, Task } from "../../../../generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { updateTaskDTO } from "../../DTOs/UpdateTaskDTO";


const adapter = new PrismaBetterSqlite3({url: "file:./dev.db"})
const prisma = new PrismaClient({ adapter });
export class updateTaskUseCase{
    async execute ({id, title, description} : updateTaskDTO): Promise<Task>{
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
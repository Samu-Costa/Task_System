import { CreateTaskDTO } from "../DTOs/CreateTaskDTO";
import { PrismaClient } from "../../../generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";


const adapter = new PrismaBetterSqlite3({url: "file:./dev.db"})
const prisma = new PrismaClient({ adapter });
export class CreateTaskUseCase{
    async execute({title, description}: CreateTaskDTO){

        const task = await prisma.task.create({
            data: {
                title,
                description
            }
        })

        return task;
    }
}
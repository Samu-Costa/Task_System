
import { PrismaClient, Task } from "../../../../generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";


const adapter = new PrismaBetterSqlite3({url: "file:./dev.db"})
const prisma = new PrismaClient({ adapter });
export class getTaskUseCase{
    async execute(): Promise<Task[]>{

        const tasks = await prisma.task.findMany({});

        return tasks;
    }
}
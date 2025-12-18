import { AppError } from "../../../../errors/AppError";
import { PrismaClient } from "../../../../generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({url: "file:./dev.db"})
const prisma = new PrismaClient({ adapter });
export class deleteTaskUseCase{
    async execute(id: number): Promise<void>{

        const taskExists = await prisma.task.findUnique({
            where: { id }
        });

        if(!taskExists){
            throw new AppError ("Task não Existe na base de dados");
        }
        const deleteUser = await prisma.task.delete({
            where: {
                id
            }
        })
    }
}
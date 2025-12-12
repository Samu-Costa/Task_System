import { Router } from "express";
import { CreateTaskController } from "../Modules/Tasks/useCases/CreateTask/createTaskController";
import { getTaskController } from "../Modules/Tasks/useCases/GetTask/getTaskController";
import { updateTaskController } from "../Modules/Tasks/useCases/UpdateTask/updateTaskController";
import { deleteTaskController } from "../Modules/Tasks/useCases/DeleteTask/deleteTaskController";
const routes = Router();
const createTask = new CreateTaskController();
const GetTask = new getTaskController();
const updateTask = new updateTaskController();
const deleteTask = new deleteTaskController();

routes.post("/", createTask.handle);
routes.get("/", GetTask.handle);
routes.patch("/:id", updateTask.handle)
routes.delete("/:id", deleteTask.handle)

export {routes};



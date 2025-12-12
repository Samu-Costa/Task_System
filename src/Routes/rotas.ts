import { Router } from "express";
import { CreateTaskController } from "../Modules/Tasks/useCases/createTaskController";

const routes = Router();
const createTaskController = new CreateTaskController();

routes.post("/", createTaskController.handle);

export {routes};



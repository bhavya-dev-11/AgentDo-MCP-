import { Router } from "express";
import { createTaskController, deleteTaskController, readAllTaskController, readTaskController, updatedTaskController } from "./task.controller.js";

const router = Router();

router.post('/create-task', createTaskController);
router.get('/read-all-task', readAllTaskController);
router.get('/read-task/:id', readTaskController);
router.delete('/delete-task/:id', deleteTaskController);
router.put('/update-task/:id', updatedTaskController);

export default router;
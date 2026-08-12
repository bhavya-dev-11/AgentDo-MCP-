import { createTask, deleteTask, readAllTask, readTask, updateTask } from "./task.service.js"

export const createTaskController = async (req, res) => {
    try {
        const task = await createTask(req.body.title);
        console.log(req.body.title);
        return res.status(201).json({ message: "success" });
    }
    catch(e) {
        console.error(e);
        return res.status(500).json({ message: "Internal Server Error" });
        
    }

}

export const readAllTaskController = async (req, res) => {
    try {
        const tasks = await readAllTask();
        return res.status(200).json({ message: "success", tasks: tasks });
    }

    catch(e) {
        console.error(e);
        return res.status(500).json({ message: "Internal Server Error" });
        
    }
}

export const readTaskController = async (req, res) => {

    try {
        const task = await readTask(parseInt(req.params.id));
        if (task) {
            return res.status(200).json({ message: "success", task: task });
        }
        return res.status(404).json({ message: "no task found" });
    }

    catch(e) {
        console.error(e);
        return res.status(500).json({ message: "Internal Server Error" });
        
    }
}

export const deleteTaskController = async (req, res) => {

    try {
        const task = await deleteTask(parseInt(req.params.id));
        if (task) {
            return res.status(200).json({ message: "task deleted successfully", });
        }
        return res.status(404).json({ message: "no task found" });
    }
    catch(e) {
        console.error(e);
        return res.status(500).json({ message: "Internal Server Error" });
        
    }
}

export const updatedTaskController = async (req, res) => {

    try {
        const task = await updateTask(parseInt(req.params.id), req.body.done);
        if (task) {
            return res.status(200).json({ message: "task updated successfully", });
        }
        return res.status(404).json({ message: "no task found" });
    }
    catch(e) {
        console.error(e);
        return res.status(500).json({ message: "Internal Server Error" });
        
    }

}
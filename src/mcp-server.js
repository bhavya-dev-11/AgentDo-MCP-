import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from 'zod';
import { createTask, deleteTask, readAllTask, readTask, updateTask } from "./modules/tasks/task.service.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import "dotenv/config";

const server = new McpServer({
    name: "AgentDo",
    version: "1.0.0",
});


server.registerTool(
    "add_task",
    {
        title: "Add Task",
        description: "Create a new Task",
        inputSchema: {
            title: z.string().min(1)
        },
    },
    async ({title}) => {

        const task = await createTask(title);
        return {
            content: [
                {
                    type: "text",
                    text: `Task Recieved: ${title}`
                }
            ]
        }
    },
    
)

server.registerTool(
    "list_task",
    {
        title: "List Tasks",
        description: "List all the tasks",
    },
    async ()=> {
        const tasks = await readAllTask();
        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(tasks)
                }
            ]
        }
    }
)

server.registerTool(
    "read_task",
    {
        title: "Read task",
        description: "Reads only single task",
        inputSchema: {
            id: z.int().min(1)
        },
    },
    async ({id}) => {
        const task = await readTask(parseInt(id));
        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(task)
                }
            ]
        }
    }
)

server.registerTool(
    "delete_task",
    {
        title: "Delete task",
        description: "Deletes a task",
        inputSchema: {
            id: z.int().min(1)
        },
    },
    async ({id}) => {
        const task = await deleteTask(parseInt(id));
        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(task)
                }
            ]
        }
    }
)

server.registerTool(
    "update_task",
    {
        title: "Update task",
        description: "Updatess only single task",
        inputSchema: {
            id: z.int().min(1),
            done: z.boolean()
        },
    },
    async ({id, done}) => {
        const task = await updateTask(parseInt(id), done);
        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(task)
                }
            ]
        }
    }
)



const transport = new StdioServerTransport();

await server.connect(transport);
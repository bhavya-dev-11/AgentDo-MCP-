import prisma from "../../config/prisma.js";

export const createTask = async(title) => {
    return await prisma.task.create({
        data: {
            title: title
        }
    })
}

export const readAllTask = async () => {
    try {
        return await prisma.task.findMany();
    } catch (error) {
        console.error("LIST TASK ERROR:", error);
        throw error;
    }
}

export const readTask = async(id) => {
    return await prisma.task.findUnique({
        where: {id: id}
    });
}

export const deleteTask = async(id) => {
    return await prisma.task.delete({
        where: {id: id}
    });
}

export const updateTask = async(id, completed) => {
    return await prisma.task.update({
        where: {id: id},
        data: {
            done: completed
        }
    })
}

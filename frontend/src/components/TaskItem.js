import React from 'react';
import { updateTask, deleteTask } from '../services/taskService';

const TaskItem = ({ task, onTaskUpdated, onTaskDeleted }) => {
    const handleCompleteToggle = async () => {
        await updateTask(task._id, { ...task, isCompleted: !task.isCompleted });
        onTaskUpdated();
    };

    const handleDelete = async () => {
        await deleteTask(task._id);
        onTaskDeleted();
    };

    return (
        <li>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
            <p>Priority: {task.priority}</p>
            <p>Status: {task.isCompleted ? "Completed" : "Pending"}</p>
            <button onClick={handleCompleteToggle}>
                {task.isCompleted ? "Mark as Pending" : "Mark as Completed"}
            </button>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
};

export default TaskItem;

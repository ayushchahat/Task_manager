import React, { useState } from 'react';
import { addTask } from '../services/taskService';

const TaskForm = ({ onTaskAdded }) => {
    const [task, setTask] = useState({ title: '', description: '', dueDate: '', priority: 'Medium' });

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addTask(task);
        onTaskAdded();
        setTask({ title: '', description: '', dueDate: '', priority: 'Medium' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={task.title}
                onChange={handleChange}
                required
            />
            <textarea
                name="description"
                placeholder="Description"
                value={task.description}
                onChange={handleChange}
            ></textarea>
            <input
                type="date"
                name="dueDate"
                value={task.dueDate}
                onChange={handleChange}
            />
            <select name="priority" value={task.priority} onChange={handleChange}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;

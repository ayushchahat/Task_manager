import React, { useState, useEffect } from 'react';
import { fetchTasks } from '../services/taskService';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState({ priority: 'All', completion: 'All' });

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const response = await fetchTasks();
        setTasks(response.data);
    };

    const handleSearchChange = (e) => setSearchQuery(e.target.value);

    const handleFilterChange = (e) => {
        setFilter({ ...filter, [e.target.name]: e.target.value });
    };

    const filteredTasks = tasks.filter((task) => {
        return (
            (filter.priority === 'All' || task.priority === filter.priority) &&
            (filter.completion === 'All' || (filter.completion === 'Completed' ? task.isCompleted : !task.isCompleted)) &&
            task.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    return (
        <div className="dashboard">
            <h1>Task Dashboard</h1>
            <div className="filter-controls">
                <input
                    type="text"
                    placeholder="Search tasks"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <select name="priority" onChange={handleFilterChange}>
                    <option value="All">All Priorities</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <select name="completion" onChange={handleFilterChange}>
                    <option value="All">All Statuses</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                </select>
            </div>
            <TaskForm onTaskAdded={loadTasks} />
            <TaskList tasks={filteredTasks} onTaskUpdated={loadTasks} onTaskDeleted={loadTasks} />
        </div>
    );
};

export default Dashboard;

import axios from 'axios';

const API_URL = 'https://task-manager-backend-oavh.onrender.com/api/tasks';

export const fetchTasks = () => axios.get(API_URL);
export const addTask = (task) => axios.post(API_URL, task);
export const updateTask = (id, task) => axios.put(`${API_URL}/${id}`, task);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);


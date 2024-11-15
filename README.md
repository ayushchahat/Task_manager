# Task Manager - MERN Stack

A **Task Management Application** built with the **MERN Stack** (MongoDB, Express.js, React, Node.js) to help users create, manage, and organize tasks efficiently. This application features task priority settings, search and filter options, and a responsive UI that works seamlessly on both desktop and mobile devices.

## 🌟 Live Demo

Explore the live app here: [Task Manager - Live Demo](https://task-manager-frontend-h0vg.onrender.com)

## 📂 Project Repository

GitHub Repository: [Task Manager GitHub](https://github.com/ayushchahat/Task_manager)

## ✨ Features

- **Task Management Dashboard**: Add, update, delete, and view task details from a central dashboard.
- **Priority Settings**: Assign priority levels to tasks (e.g., High, Medium, Low) to streamline task management.
- **Search & Filter**: Quickly locate tasks using search and filter options.
- **Responsive UI**: Designed for optimal use on both desktop and mobile devices.
- **Data Persistence**: Frontend tasks persist using local storage.
- **Backend Integration**: The backend uses Node.js and Express to serve APIs, with MongoDB Atlas as the cloud database.

## 🚀 Future Enhancements

- **User Authentication**: Add user accounts for secure and personalized task management.
- **Notifications**: Implement reminders or alerts for high-priority tasks.
- **Advanced Filtering**: Add more sorting and filtering options for improved task organization.

## 🛠 Setup Instructions

To set up the project locally, follow these steps:

### Prerequisites

Ensure the following are installed on your system:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **MongoDB Atlas**: [Sign up for MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (for cloud database)
- **Code Editor**: [Visual Studio Code](https://code.visualstudio.com/) (recommended)
## 📁 Project Structure

### Frontend (`client/src`):


client
└── src
    ├── App.js                  # Main React component handling routing and layout
    ├── components              # Folder for reusable UI components
    │   ├── Dashboard.js        # Task Dashboard component displaying tasks
    │   ├── TaskForm.js         # Form component to add or edit tasks
    │   └── TaskList.js         # List component to display all tasks
    └── services
        └── taskService.js      # Service layer for handling API calls to backend


### Backend (`server`):


server
├── .env                        # Environment variables file
├── server.js                   # Main server file
├── config                      # Folder for configuration files
│   └── db.js                   # MongoDB connection setup
├── models                      # Folder for Mongoose schemas and models
│   └── Task.js                 # Task schema and model definition
└── routes                      # Folder for API routes
    └── taskRoutes.js           # API routes for task management

## 📖 Assumptions
-**Default Priority**: All tasks default to "Medium" priority unless specified.
-**Data Storage**: Tasks are stored on the frontend using local storage to prevent data loss on refresh.
-**Responsive Design**: The UI adapts to both desktop and mobile screens for a seamless experience.
## Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ayushchahat/Task_manager.git
   cd Task_manager

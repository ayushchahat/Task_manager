# Task Manager - MERN Stack

A Task Management Application built using the MERN Stack (MongoDB, Express.js, React, Node.js). The application allows users to create, manage, and organize tasks effectively. It includes features like task priority settings, search and filter options, and data persistence via local storage.

## Features

- **Task Management Dashboard**: Manage tasks with options to add, update, delete, and view details.
- **Priority Settings**: Set task priority (e.g., High, Medium, Low) to prioritize work.
- **Search & Filter**: Search and filter tasks based on specific criteria.
- **Responsive UI**: Optimized for both desktop and mobile devices.
- **Data Persistence**: Uses local storage to persist task data on the frontend.
- **Backend Integration**: Uses Node.js and Express to serve APIs for task management, connected to MongoDB Atlas for cloud database storage.

## Setup Instructions

Follow the instructions below to set up the project locally:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (for cloud database)
- A code editor like [Visual Studio Code](https://code.visualstudio.com/)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ayushchahat/Task_manager.git
   cd Task_manager
### Project Structure(Frontend):
src
├── App.js                        # Main React component that holds the routing and layout
├── components
│   ├── Dashboard.js              # Task Dashboard component that displays tasks
│   ├── TaskForm.js               # Form component to add or edit tasks
│   └── TaskList.js               # List component to display all tasks
└── services
    └── taskService.js            # Service layer to handle API calls to the backend

### Project Structure(Backend):
task-manager-backend
├── .env                         
├── server.js                     
├── config
│   └── db.js                     
└── models
    └── Task.js                   
└── routes
    └── taskRoutes.js             

This `README.md` includes:

- A clean and structured representation of the **folder structure** using code blocks.
- The **steps to set up** the project locally.
- Additional details such as **features**, **future enhancements**, and **assumptions**.

Feel free to replace the placeholder `<my-mongodb-atlas-uri>` with your actual MongoDB URI.

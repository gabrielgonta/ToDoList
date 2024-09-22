# 📝 Todolist - Fullstack React Version

## Description

Welcome to Todolist - Fullstack React Version! 🎉 
This project is a task management application (todolist), developed using React for the front end and a robust back-end architecture, allowing you to efficiently manage your daily tasks.

The application follows the principles of a classic todolist, but with a modern and intuitive interface. With a smooth user experience, you can easily add, edit, or delete tasks, and keep track of your priorities directly from your browser.

## Prerequisites
Installer NodeJs : https://nodejs.org/fr/

## Installation

Clone the repository :

```
git clone https://github.com/gabrielgonta/ToDoList.git
```

Navigate to the root directory where the 'package.json' file is located, then run the command to install the dependencies :

```
cd ToDoList
npm install
```

## Deployment

Once the dependencies are installed, you can start the application :

```
npm start
```

By default, the server listens on port **3000**. 

You can now access the application via this address: http://localhost:3000/ :

## How I try to stand out

    ✔ Connecting application with Firebase
    ✔ User authentication
    ✔ The ability to edit task title
    ✔ Task creation date
    ✔ Deadline functionality
    ✔ Notes field bootstrapped with tiny
    ✔ Tasks deadline filtering system
    ✔ Images storage
    ✔ Navigation menu with with swipe events
    ✔ User page
    ✔ Capability to change:
        - profile picture
        - user name
        - password
        - email
    ✔ Capability to delete account

## Page Preview

### Register page

![](Assets/todo-list-register.gif)

### Tasks page

![](Assets/todo-list-tasks.gif)

### Single task page

![](Assets/todo-list-task.gif)

### Not found page

![](Assets/todo-list-notfound.gif)

## Configuration Firebase

To have the application properly work with your own Firebase database, you must replace the configuration settings in the file src/config/firebase.js with your own. In this file, you'll find a Firebase configuration object that looks like this:

```
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

```

## Security

With Firebase security rules, your account, data, and files won’t fall into the wrong hands.

### How it works

Firebase security rules act as a barrier between your data and malicious users.

Firebase security rules work by matching a pattern to database paths and then applying custom conditions to allow data access at those paths. Every Firebase feature rule has a path-matching component and a conditional statement that allows read or write access. Rules are defined for each Firebase feature in this application to ensure that only you can access your account information.

## Authors

* **Gabriel Gonta** - *Initial work* - [ToDoList](https://github.com/gabrielgonta/ToDoList.git)
# 📝 Todolist - Version Fullstack React

## Description

Bienvenue dans Todolist - Version Fullstack React ! 🎉
Ce projet est une application de gestion de tâches (todolist), développée en utilisant React pour le front-end et une architecture back-end robuste, permettant de gérer efficacement vos tâches quotidiennes.

L'application reprend les principes d'une todolist classique, mais avec une interface moderne et intuitive. Grâce à une expérience utilisateur fluide, vous pouvez facilement ajouter, modifier ou supprimer des tâches, et garder une trace de vos priorités, directement depuis votre navigateur.

## Prérequis
Installer NodeJs : https://nodejs.org/fr/

## Installation

Cloner le répo :

```
https://github.com/gabrielgonta/ToDoList.git
```

Se rendre à la base du répertoire où se trouve le fichier **'package.json'** puis lancer la commande pour installer les dépendences :

```
cd ToDoList
npm install
```

## Déploiement

Une fois que les dépendances ont été installées vous pouvez lancer l'application :

```
npm start
```

Par défaut le serveur écoute sur le port **3000**. 

Vous pouvez à présent accèder à l'application via cette adressse : http://localhost:3000/ :

## How I try to stand out

### Features added independently of the YouCode course

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

Pour que l'application fonctionne correctement avec votre propre base de données Firebase, vous devez remplacer les paramètres de configuration dans le fichier src/config/firebase.js avec les vôtres.
Dans src/config/firebase.js, vous trouverez un objet de configuration Firebase qui ressemble à ceci :

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

## Sécurité

Avec les règles de sécurité de Firebase, votre compte, vos données et vos fichiers ne tomberont pas entre de mauvaises mains.

### Comment ça marche

Les règles de sécurité Firebase se dressent entre vos données et les utilisateurs malveillants.

Les règles de sécurité Firebase fonctionnent en faisant correspondre un modèle aux chemins de base de données, puis en appliquant des conditions personnalisées pour autoriser l'accès aux données sur ces chemins. Toutes les règles des fonctionnalités Firebase disposent d'un composant de correspondance de chemin et d'une instruction conditionnelle autorisant l'accès en lecture ou en écriture. Des règles sont définies pour chaque fonctionnalité Firebase de cette application afin de garantir que vous seul puissiez accéder aux informations de votre compte.

## Auteurs

* **Gabriel Gonta** - *Initial work* - [ToDoList](https://github.com/gabrielgonta/ToDoList.git)
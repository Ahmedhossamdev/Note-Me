# Notes-App

The Notes-App is a web application developed using Node.js, Express, and MongoDB. It allows users to create, read, update, and delete notes, providing a seamless note-taking experience. This README provides an overview of the project and instructions for setting up and running the application.

## Features

- Create, read, update, and delete notes
- User authentication with Google and Passport.js
- Search functionality for easy retrieval of notes
- Server-side rendering using EJS
- Pagination

## Screens

**Home page:**
![Home page](https://github.com/Ahmedhossamdev/NotesApp/assets/99441866/3cfcfe90-28e0-4e5b-835d-0511b0c0fddd)

**Notes page:**
![Notes page](https://github.com/Ahmedhossamdev/NotesApp/assets/99441866/5602b98b-a935-4f39-aaf1-72f58982418a)

**Add Note:**
![Add Note](https://github.com/Ahmedhossamdev/NotesApp/assets/99441866/2f01d795-5271-4890-8c31-2388aa27e118)

**View Note:**
![View Note](https://github.com/Ahmedhossamdev/NotesApp/assets/99441866/8d6f3019-1a3f-4428-90d2-8220f19674fa)

## Technologies Used

- Node.js
- Express
- MongoDB
- Google authentication
- Passport.js
- EJS
- HTML
- CSS
- Bootstrap

## Getting Started

To get started with the Notes-App, follow these steps:

1. Clone the repository:
git clone https://github.com/your-username/NotesApp.git

2. Install the dependencies:
npm install


3. Configure environment variables:

- Create a `.env` file in the root directory.
- Add the following environment variables:

```plaintext
MONGODB_URI=<your-mongodb-connection-string>
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
SESSION_SECRET=<your-session-secret>
```
4. Start The application:
npm start


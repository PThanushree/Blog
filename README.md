# The Marginal — Blog Platform with Comments

A full-stack blogging platform where users register, publish posts, and discuss them in comments — built with Express, MongoDB, and React.

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-8.x-47A248?logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-Bundler-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue)

## Overview

Users register and log in, write and publish blog posts, and comment on any post. Editing and deleting a post is restricted to its author; a comment can be removed by whoever wrote it, or by the author of the post it's on (basic moderation).

## Features

- 🔐 User registration and login (JWT-based sessions)
- ✍️ Create, edit, and delete blog posts — authorship enforced server-side
- 💬 Comment on any post; delete your own comments, or moderate comments on posts you wrote
- 🗞️ Editorial feed view with byline, date, and estimated read time
- 📱 Responsive, readable layout

## Tech stack

| Layer      | Technology                          |
|------------|--------------------------------------|
| Frontend   | React, Vite, React Router            |
| Backend    | Node.js, Express                     |
| Database   | MongoDB (Mongoose ODM)               |
| Auth       | JSON Web Tokens (JWT), bcrypt        |

## Project structure

```
blog-platform/
├── blog-backend/         # Express REST API
│   ├── database/         # MongoDB connection
│   ├── middleware/       # JWT auth middleware
│   ├── models/           # Mongoose schemas (User, Post, Comment)
│   └── server.js         # App entry point & routes
└── blog-frontend/        # React (Vite) client
    └── src/
        ├── pages/         # Feed, Post detail, Editor, Auth
        ├── AuthContext.jsx
        └── api.js
```

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- A MongoDB instance — local install or a free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) cluster

### 1. Clone the repository

```bash
git clone url
cd blog-platform
```

### 2. Backend setup

```bash
cd blog-backend
npm install
```
Run the server:

```bash
npm run dev
```

Expected output: `Database connected successfully` followed by `Server is running on port 8000`.

### 3. Frontend setup

In a separate terminal:

```bash
cd blog-frontend
npm install
npm run dev
```

## API reference

Routes marked **Auth** require an `Authorization: Bearer <token>` header, returned from login/register.

| Method | Endpoint                  | Auth | Description                          |
|--------|------------------------------|:----:|----------------------------------------|
| POST   | `/auth/register`             | No   | Create an account                      |
| POST   | `/auth/login`                  | No   | Log in, returns a JWT                  |
| GET    | `/posts`                        | No   | List all posts                         |
| GET    | `/posts/:id`                    | No   | Get a post with its comments           |
| POST   | `/posts`                        | Yes  | Create a post                          |
| PUT    | `/posts/:id`                    | Yes  | Edit a post (author only)              |
| DELETE | `/posts/:id`                    | Yes  | Delete a post and its comments (author only) |
| POST   | `/posts/:id/comments`            | Yes  | Add a comment to a post                |
| DELETE | `/comments/:id`                  | Yes  | Delete a comment (comment or post author) |

## Usage

1. Register an account or sign in.
2. Click "Write" to publish a post.
3. Open any post from the feed to read it and leave a comment.
4. On your own posts, "Edit post" and "Delete post" appear beneath the title.


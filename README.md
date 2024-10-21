# My React & Redux Blog Project

This project is a blog application built with **React** and **Redux**, where users can create posts and react to them using emojis. This README includes key concepts and lessons learned throughout the development process, making it beginner-friendly.

## Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Key Concepts & Lessons Learned](#key-concepts--lessons-learned)
  - [React Components](#react-components)
  - [React State Management](#react-state-management)
  - [React-Redux](#react-redux)
  - [Redux Slice](#redux-slice)
  - [React Dispatch and Action](#react-dispatch-and-action)
  - [Error Debugging](#error-debugging)
  - [Reactions and UI](#reactions-and-ui)
- [Installation](#installation)
- [Usage](#usage)
- [Resources](#resources)

---

## Project Overview

This is a simple blog application where users can:
- Create new blog posts
- React to posts using predefined emojis (e.g., 👍, 😲, ❤, etc.)

The app uses **React** for building the user interface, and **Redux** for managing the global state of the application. Reactions to posts are handled using Redux actions, and the state is stored in a Redux slice.

---

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for managing global state in JavaScript applications.
- **React-Redux**: Official React bindings for Redux to manage state in React components.
- **Redux Toolkit**: Simplifies Redux logic with slices and pre-built reducers.

---

## Key Concepts & Lessons Learned

### React Components
- **Components** are reusable building blocks of React applications. I learned to write functional components and pass props to manage data between them.
  
```javascript
const Post = ({ title, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

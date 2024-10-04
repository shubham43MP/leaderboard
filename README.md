# React + TypeScript + Vite quiz app

 This project is a real-time quiz application built with React and TypeScript using Vite as the build tool. It features a dynamic leaderboard where new users are added periodically, and their scores are updated in real-time, creating an engaging and interactive user experience.
 Note: This app does not use an actual back-end. The data is mocked to simulate real-time user additions and score updates.

## Features
- Real-Time Leaderboard: Displays the current standings of all participants in the quiz, updating dynamically as new users join.
- Dynamic User Addition: Users are added to the leaderboard every few seconds, simulating a real-time quiz environment.
- Score Updates: Each user's score is updated dynamically after a random interval, with the leaderboard re-ordered to reflect score changes.
- Toast Notifications: Provides real-time notifications when a new player joins the quiz or a player’s score is updated.
- Responsive UI: The leaderboard adjusts for different screen sizes and includes alternate row coloring for better readability.

## Install Dependecies
```
npm install
```

## Start the dev server
```
 npm run dev
```
 The application will be available at `http://localhost:5173`

## Points to note
- Mocked apis with setTimeou have been used like for firing sockets and similar, wherever required

## Project Structure
- /components: Contains reusable React components, including the main Leaderboard component that displays the real-time quiz leaderboard.
- /hooks: Contains custom React hooks such as useLeaderboard which spearates the concerns of logic from the UI rendering.
- /utils: Includes utility files such as type definitions (common.type.ts) used throughout the app.
- /api: Mock data and API-related functionality, such as newPlayers.ts.
- /public: Contains static assets like images, icons, and any other public files used in the app.

## Libraries and Tools 
- React: A JavaScript library for building user interfaces, used here for component-based development.
- TypeScript: Provides static typing, improving code quality, refactoring, and overall maintainability.
- Vite: A fast, modern build tool for web projects, offering lightning-fast hot module replacement (HMR).
- React Toastify: For displaying customizable and beautiful toast notifications.

## Development Environment
- Node.js: Version 20.17.0 is required to install dependencies and run the project.
- Vite: Provides a fast development environment and optimized build process.
- ESLint: Linting tool for maintaining code consistency and avoiding bugs.
- Operating System: The app has been developed and tested on Ubuntu 23, but it should work on other OSes as well.

## Actual screenshot of the working app 

![Alt text](public/app_ss.png?raw=true "Title")
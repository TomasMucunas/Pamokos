<h1 align="center">
  <a href="https://github.com/Technigo/react-router-boiler-plate-minimal-css/tree/main">
    <img src="/src/assets/boiler-plate-background.svg" alt="Boiler Plate">
  </a>
</h1>

# React Router Exercise: Rolling Stones' Top 500 Songs

We'll be diving into react-router-dom and harnessing the useParams() hook.

## Using this repository

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The below command is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```

## Overview

You'll be working with a songs.json file, which contains a "songs" key. This key holds an array of the Rolling Stones' 500 best songs. Each song object has details like rank, title, artist, album, and year.

## Requirements

- Fetch and display song titles on the homepage.
- Use the song's title as a key to create dynamic routes. For instance, if a song's title is "Imagine", the route should be /song/imagine.
- When a song title is clicked, it should route to a dynamic page displaying all the song's details.

## Rule

Always use the song's title key to generate the dynamic route for each song's detailed view.

## Looking for some hints?

Pay close attention to how data is passed between components and how dynamic routes are set up and utilized. Understanding the flow of data and the structure of routes will be key to successfully completing the exercise.

Lets take a look at the following components.

### **1. src/App.jsx (Main App component of the React application)**

- This file sets up the main structure of the application.
- It uses the `BrowserRouter` from `react-router-dom` to enable routing within the app.
- The `nav` section contains links to navigate through the app. Currently, there's a link to the home page.
- The `Routes` component is used to render the routes defined in the `routes.jsx` file.

### **2. src/pages/Home.jsx (A React component for the home page)**

- This component displays a list of the "Rolling Stones 500 Greatest Songs of all Time".
- Songs data is imported from a JSON file and is mapped to display each song with a link.
- The link for each song is dynamically generated based on the song's title. This will be crucial when setting up dynamic routes.

### **3. src/pages/SongInfo.jsx (A React component displaying song information)**

- This component is responsible for displaying detailed information about a specific song.
- It uses the `useParams` hook from `react-router-dom` to fetch the song title from the URL.
- Based on the song title from the URL, it finds the corresponding song from the imported JSON data.
- If the song is found, it displays its title, artist, album, and year. If not, it displays a "Song not found!" message.

### **4. src/routes/routes.jsx (Contains the routes for the React app)**

- This file defines the routes for the application.
- There's a default route that points to the `Home` component.
- A dynamic route is set up for individual songs using the `:songTitle` parameter. This route renders the `SongInfo` component.

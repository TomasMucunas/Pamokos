import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddTaskForm from "./components/AddTaskForm";
import EditTaskForm from "./components/EditTaskForm";
import TasksTable from "./components/TasksTable";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (task) => setTasks([...tasks, task]);

  const handleEditTask = (id, updatedTask) =>
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));

  const handleDeleteTask = (id) =>
    setTasks(tasks.filter((task) => task.id !== id));

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/tasks"
          element={<TasksTable tasks={tasks} onDeleteTask={handleDeleteTask} />}
        />
        <Route
          path="/tasks/add"
          element={<AddTaskForm onAddTask={handleAddTask} />}
        />
        <Route
          path="/tasks/:id"
          element={<EditTaskForm tasks={tasks} onEditTask={handleEditTask} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

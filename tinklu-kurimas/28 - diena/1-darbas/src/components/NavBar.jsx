import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/tasks/add">Add Task</Link>
      <Link to="/tasks">View Tasks</Link>
    </nav>
  );
}

export default NavBar;

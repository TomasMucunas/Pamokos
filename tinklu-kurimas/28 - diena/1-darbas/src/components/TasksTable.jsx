import React from "react";
import { Link } from "react-router-dom";
// import "./TasksTable.css";

function TasksTable({ tasks, onDeleteTask }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Due Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.name}</td>
            <td>{task.dueDate}</td>
            <td>
              <Link to={`/tasks/${task.id}`}>Edit</Link>
              <button onClick={() => onDeleteTask(task.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TasksTable;

import React from 'react';

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return <p>No tasks yet!</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
          {task.text}
          <button onClick={() => onToggleTask(task.id)}>
            {task.done ? 'Undo' : 'Done'}
          </button>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;

const express = require("express");
const app = express();
const PORT = 3001;

let todos = [];

app.use(express.json());

app.get("/todos", (req, res) => {
  res.status(200).json(todos);
});

app.post("/todos", (req, res) => {
  const { description, isCompleted } = req.body;

  if (!description) {
    return res
      .status(400)
      .json({ message: "Užduoties aprašymas yra privalomas" });
  }

  const newTodo = {
    id: todos.length + 1,
    description,
    isCompleted: isCompleted || false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.get("/todos/:id", (req, res) => {
  const { id } = req.params;

  const todo = todos.find((t) => t.id === parseInt(id));

  if (!todo) {
    return res.status(404).json({ message: "Užduotis nerasta" });
  }

  res.status(200).json(todo);
});

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;

  const index = todos.findIndex((t) => t.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ message: "Užduotis nerasta" });
  }

  const deletedTodo = todos.splice(index, 1);
  res.status(200).json({ message: "Ištrinta užduotis", deletedTodo });
});

app.listen(PORT, () => {
  console.log(`Serveris veikia http://localhost:${PORT}/todos`);
});

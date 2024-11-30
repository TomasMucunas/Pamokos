import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./AddTaskForm.css";

function AddTaskForm({ onAddTask }) {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const newTask = { id: Date.now(), ...data };
    onAddTask(newTask);
    alert("Task successfully added!");
    reset();
    navigate("/tasks");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Add Task</h1>
      <label>
        <h3>Name:</h3>
        <input
          type="text"
          {...register("name", {
            required: "Name is required",
            minLength: { value: 2, message: "Minimum length is 2" },
            maxLength: { value: 80, message: "Maximum length is 80" },
            pattern: {
              value: /^[A-Z][a-zA-Z ]*$/,
              message: "Must start with a capital letter and contain only letters",
            },
          })}
        />
      </label>
      <label>
        <h3>Due Date:</h3>
        <input
          type="date"
          {...register("dueDate", {
            required: "Due date is required",
            validate: {
              notPast: (value) =>
                new Date(value) >= new Date() || "Cannot set a past date",
              withinOneYear: (value) =>
                new Date(value) <=
                  new Date(new Date().setFullYear(new Date().getFullYear() + 1)) ||
                "Must be within one year",
            },
          })}
        />
      </label>
      <button className="button" type="submit">
        Add Task
      </button>
    </form>
  );
}

export default AddTaskForm;

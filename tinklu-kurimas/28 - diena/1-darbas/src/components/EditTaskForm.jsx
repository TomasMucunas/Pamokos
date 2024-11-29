import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";

function EditTaskForm({ tasks, onEditTask }) {
  const { id } = useParams();
  const task = tasks.find((task) => task.id === Number(id));
  const { register, handleSubmit, reset } = useForm({ defaultValues: task });
  const navigate = useNavigate();

  useEffect(() => {
    reset(task);
  }, [task, reset]);

  const onSubmit = (data) => {
    onEditTask(Number(id), data);
    alert("Task successfully updated!");
    navigate("/tasks");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Edit Task</h2>
      <label>
        Name:
        <input
          type="text"
          {...register("name", {
            required: "Name is required",
            minLength: { value: 2, message: "Minimum length is 2" },
            maxLength: { value: 80, message: "Maximum length is 80" },
          })}
        />
      </label>
      <label>
        Due Date:
        <input
          type="date"
          {...register("dueDate", {
            required: "Due date is required",
          })}
        />
      </label>
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditTaskForm;

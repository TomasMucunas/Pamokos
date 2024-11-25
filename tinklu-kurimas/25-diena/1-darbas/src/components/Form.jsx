import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:8080/animals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Animal saved successfully!");
      } else {
        alert("Failed to save animal.");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="col-4 mx-auto">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name/Имя
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="type" className="form-label">
          Type/Тип
        </label>
        <input
          type="text"
          id="type"
          {...register("type", { required: true })}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="breed" className="form-label">
          Breed/Порода
        </label>
        <input
          type="text"
          id="breed"
          {...register("breed", { required: true })}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age/Возраст
        </label>
        <input
          type="number"
          id="age"
          {...register("age", { required: true, valueAsNumber: true })}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="weight" className="form-label">
          Weight/Вес
        </label>
        <input
          type="number"
          id="weight"
          step="0.01"
          {...register("weight", { required: true, valueAsNumber: true })}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="gender" className="form-label">
          Gender/Гендер
        </label>
        <input
          type="text"
          id="gender"
          {...register("gender", { required: true })}
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit/Отправить
      </button>
    </form>
  );
}

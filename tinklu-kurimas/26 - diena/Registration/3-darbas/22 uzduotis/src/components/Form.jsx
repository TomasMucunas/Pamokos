import React from "react";
import { useForm } from "react-hook-form";
import './Form.css';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
          {...register("name", {
            required: "Name is required.",
            pattern: {
              value: /^[A-Z]/,
              message: "Name must start with an uppercase letter.",
            },
          })}
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="type" className="form-label">
          Type/Тип
        </label>
        <input
          type="text"
          id="type"
          {...register("type", {
            required: "Type is required.",
            minLength: { value: 2, message: "Type must be at least 2 characters." },
            maxLength: { value: 50, message: "Type must be less than 50 characters." },
          })}
          className="form-control"
        />
        {errors.type && <p className="text-danger">{errors.type.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="breed" className="form-label">
          Breed/Порода
        </label>
        <input
          type="text"
          id="breed"
          {...register("breed", {
            required: "Breed is required.",
            minLength: { value: 5, message: "Breed must be at least 5 characters." },
            maxLength: { value: 100, message: "Breed must be less than 100 characters." },
            pattern: {
              value: /^[A-Z]/,
              message: "Breed must start with an uppercase letter.",
            },
          })}
          className="form-control"
        />
        {errors.breed && <p className="text-danger">{errors.breed.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age/Возраст
        </label>
        <input
          type="number"
          id="age"
          {...register("age", {
            required: "Age is required.",
            min: { value: 1, message: "Age must be at least 1." },
            max: { value: 100, message: "Age must be less than 100." },
          })}
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="weight" className="form-label">
          Weight/Вес
        </label>
        <input
          type="number"
          id="weight"
          step="0.01"
          {...register("weight", {
            min: { value: 0.05, message: "Weight must be at least 0.05." },
          })}
          className="form-control"
        />
        {errors.weight && <p className="text-danger">{errors.weight.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="gender" className="form-label">
          Gender/Гендер
        </label>
        <input
          type="text"
          id="gender"
          {...register("gender", { required: "Gender is required." })}
          className="form-control"
        />
        {errors.gender && <p className="text-danger">{errors.gender.message}</p>}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit/Отправить
      </button>
    </form>
  );
}

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditBook({ books, setBooks }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const bookToEdit = books.find((book) => book.id === parseInt(id));
  if (!bookToEdit) return <h1>Knyga nerasta!</h1>;

  const [form, setForm] = useState({ ...bookToEdit });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === parseInt(id) ? { ...form } : book))
    );
    navigate("/");
  };

  return (
    <div>
      <h1>Redaguoti knygą</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          value={form.author}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
        />
        <input
          type="url"
          name="cover"
          value={form.cover}
          onChange={handleChange}
        />
        <button type="submit">Išsaugoti</button>
        <button type="button" onClick={() => navigate("/")}>
          Atšaukti
        </button>
      </form>
    </div>
  );
}

export default EditBook;

import React, { useState } from "react";

function AddBook({ books, setBooks }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    price: "",
    cover: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.title ||
      !form.author ||
      !form.category ||
      !form.price ||
      !form.cover
    ) {
      alert("Visi laukai privalomi!");
      return;
    }

    if (form.price <= 0) {
      alert("Kaina turi būti didesnė nei 0!");
      return;
    }

    const newBook = {
      id: books.length + 1,
      ...form,
      reserved: false,
    };

    setBooks((prevBooks) => [...prevBooks, newBook]);
    alert("Knyga pridėta!");
    setForm({
      title: "",
      author: "",
      category: "",
      price: "",
      cover: "",
    });
  };

  return (
    <div>
      <h1>Pridėti knygą</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book Name"
          value={form.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
        />
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
        >
          <option value="">Pasirinkti kategoriją</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Mystery">Mystery</option>
          <option value="Horror">Horror</option>
        </select>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />
        <input
          type="url"
          name="cover"
          placeholder="Cover Image URL"
          value={form.cover}
          onChange={handleChange}
        />
        <button type="submit">Pridėti</button>
      </form>
    </div>
  );
}

export default AddBook;

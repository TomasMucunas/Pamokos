import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";

function App() {
  const [books, setBooks] = useState([]);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage books={books} setBooks={setBooks} />} />
        <Route path="/add-book" element={<AddBook books={books} setBooks={setBooks} />} />
        <Route path="/edit-book/:id" element={<EditBook books={books} setBooks={setBooks} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

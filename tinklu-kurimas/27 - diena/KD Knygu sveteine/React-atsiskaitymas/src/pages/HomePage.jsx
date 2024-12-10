import { Link } from "react-router-dom";

function HomePage({ books, setBooks }) {
  const toggleReserved = (bookId) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === bookId ? { ...book, reserved: !book.reserved } : book
      )
    );
  };

  return (
    <div>
      <h1>Knygų sąrašas</h1>
      {books.length === 0 ? (
        <p>Sąrašas tuščias. Pridėkite knygų!</p>
      ) : (
        <ul style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {books.map((book) => (
            <li
              key={book.id}
              style={{ border: "1px solid gray", padding: "10px" }}
            >
              <img
                src={book.cover}
                alt={book.title}
                style={{ width: "150px", height: "200px" }}
              />
              <h2>{book.title}</h2>
              <p>Autorius: {book.author}</p>
              <button onClick={() => toggleReserved(book.id)}>
                {book.reserved ? "Grąžinti" : "Išduoti"}
              </button>
              <Link to={`/edit-book/${book.id}`}>
                <button>Redaguoti</button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;

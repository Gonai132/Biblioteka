import React, { useEffect, useState } from "react";
import "../Books/books.css";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8081/api/books")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Błąd podczas pobierania danych");
        }
        return res.json();
      })
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Ładowanie książek...</p>;
  if (error) return <p>❌ Błąd: {error}</p>;

  return (
    <div className="book-list">
      <h2>📚 Lista książek dostępnych w bibliotece:</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tytuł</th>
            <th>Autor</th>
            <th>Opis</th>
            <th>ISBN</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.description}</td>
              <td>{book.isbn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
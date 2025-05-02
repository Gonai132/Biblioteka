import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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

  if (loading) return <p className="loading">Ładowanie książek...</p>;
  if (error) return <p className="loading">Błąd: {error}</p>;

  return (
    <div className="book-list">
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>📚 Lista książek dostępnych w bibliotece:</motion.h2>
      <motion.table initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tytuł</th>
            <th>Autor</th>
            <th>Opis</th>
            <th>ISBN</th>
            <th>Category</th>
            <th>Actions</th>
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
              <td>{book.category?.name}</td>
              <td>
                <div className="d-flex gap-2">
                  <Link to={`/books/edit/${book.id}`} className="btn btn-secondary">Edytuj</Link>
                  <Link to={`/books/delete/${book.id}`} className="btn btn-danger">Usuń</Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
};

export default Books;
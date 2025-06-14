import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../Books/books.css";
import { useLocation } from "react-router-dom";

const Books = () => {
  const location = useLocation();
  const [flashMessage, setFlashMessage] = useState(location.state?.message || null);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
  if (flashMessage) {
    const timer = setTimeout(() => setFlashMessage(null), 4000);
    return () => clearTimeout(timer);
  }
}, [flashMessage]);

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

  const handleDelete = (id, title) => {
    const confirmDelete = window.confirm(`Czy na pewno chcesz usunąć książkę: "${title}"?`);
  
    if (!confirmDelete) return;
  
    fetch(`http://localhost:8081/api/books/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Nie udało się usunąć książki");
        }
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
        setMessage(`Książka "${title}" została usunięta z listy.`);
        setTimeout(() => setMessage(null), 5000);
      })
      .catch((err) => {
        alert("Wystąpił błąd podczas usuwania książki: " + err.message);
      });
    };

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
                  <button className="btn btn-danger" onClick={() => handleDelete(book.id, book.title)}>Usuń</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </motion.table>
      {flashMessage && (<div className="alert popup text-center" role="alert">{flashMessage}</div>)}
      {message && ( <div className="alert popup text-center" role="alert">{message}</div>)}
    </div>
  );
};

export default Books;
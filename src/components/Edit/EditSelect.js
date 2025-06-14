import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./edit.css";

function EditSelect() {
  const [books, setBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8081/api/books")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Błąd podczas pobierania książek");
        }
        return res.json();
      })
      .then((data) => {
        setBooks(data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  const handleSelectChange = (e) => {
    setSelectedBookId(e.target.value);
  };

  const handleEdit = () => {
    if (selectedBookId) {
      navigate(`/books/edit/${selectedBookId}`);
    }
  };

  return (
    <div className="edit-content">
      <motion.div className="contact-form"  initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <div className="select-content">
      <h2 className="title-style">Wybierz książkę do edycji:</h2>
      <select className="form-select mt-3" onChange={handleSelectChange} value={selectedBookId}>
        <option value="">-- Wybierz książkę z listy --</option>
        {books.map((book) => (
          <option key={book.id} value={book.id}>
            {book.title} - {book.author}
          </option>
        ))}
      </select>

      <button
        className="btn btn-danger mt-3"
        onClick={handleEdit}
        disabled={!selectedBookId}
      >
        Edytuj tę książkę
      </button>
      </div></motion.div>
    </div>
  );
}

export default EditSelect;
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
      <h1>Wybierz książkę do edycji</h1>
      <select className="form-select mt-3" onChange={handleSelectChange} value={selectedBookId}>
        <option value="">-- Wybierz książkę --</option>
        {books.map((book) => (
          <option key={book.id} value={book.id}>
            {book.title} - {book.author}
          </option>
        ))}
      </select>

      <button
        className="btn btn-primary mt-3"
        onClick={handleEdit}
        disabled={!selectedBookId}
      >
        Edytuj wybraną książkę
      </button>
    </div>
  );
}

export default EditSelect;
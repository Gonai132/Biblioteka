import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./return.css";

function Return() {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    description: "",
    isbn: "",
    category: { id: "" },
  });
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8081/api/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.error("Błąd pobierania kategorii:", err));
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "categoryId") {
      setBook({ ...book, category: { id: e.target.value } });
    } else {
      setBook({ ...book, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !book.title.trim() ||
      !book.author.trim() ||
      !book.isbn.trim() ||
      !book.category.id
    ) {
      setError("Wypełnij wszystkie wymagane pola: tytuł, autor, ISBN i kategoria.");
      return;
    }
  
    fetch(`http://localhost:8081/api/books`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/books", {
          state: {
            message: `Książka "${book.title}" została zwrócona do biblioteki.`,
          },
        });
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="return-content">
      <h2 className="return-title">Zwróć książkę do biblioteki</h2>

      <motion.form
        onSubmit={handleSubmit}
        className="needs-validation return-form"
        noValidate
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Kategoria:</label>
          <select
            id="category"
            name="categoryId"
            value={book.category.id}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="" disabled>Wybierz kategorię</option>
            {Array.isArray(categories) && categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">Tytuł:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={book.title}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="author" className="form-label">Autor:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={book.author}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Opis:</label>
          <textarea
            id="description"
            name="description"
            value={book.description}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="isbn" className="form-label">ISBN:</label>
          <input
            type="text"
            id="isbn"
            name="isbn"
            value={book.isbn}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-secondary mx-auto d-block">
          Zwróć książkę
        </button>

        {error && <p className="text-danger mt-2">{error}</p>}
      </motion.form>
    </div>
  );
}

export default Return;
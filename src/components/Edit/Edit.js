import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./edit.css";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    description: "",
    isbn: "",
    category: { id: "" },
  });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8081/api/books/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Błąd podczas pobierania książki");
        }
        return res.json();
      })
      .then((data) => {
        setBook({
          ...data,
          category: data.category || { id: "" },
        });
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

    fetch(`http://localhost:8081/api/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.error("Błąd pobierania kategorii:", err));
  }, [id]);

  const handleChange = (e) => {
    if (e.target.name === "categoryId") {
      setBook({ ...book, category: { id: e.target.value } });
    } else {
      setBook({ ...book, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8081/api/books/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then(() => navigate("/books"))
      .catch((err) => setError(err.message));
  };

  if (loading) return <div className="edit-content"><p>Ładowanie...</p></div>;
  if (error) return <div className="edit-content"><p>Błąd: {error}</p></div>;

  return (
    <div className="edit-content">
      <h1>Edytuj książkę</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Tytuł:</label>
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Autor:</label>
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Opis:</label>
          <textarea
            name="description"
            value={book.description}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">ISBN:</label>
          <input
            type="text"
            name="isbn"
            value={book.isbn}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Kategoria:</label>
          <select
            name="categoryId"
            value={book.category.id}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">-- Wybierz kategorię --</option>
            {Array.isArray(categories) && categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Zapisz zmiany
        </button>
      </form>
    </div>
  );
}

export default Edit;


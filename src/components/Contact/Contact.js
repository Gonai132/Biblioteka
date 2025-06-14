import "../Contact/contact.css";
import { motion } from "framer-motion";
import biblioImage from "../../img/biblio2.jpeg";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
    country: "pl",
  });

  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message || !formData.subject) {
      setErrorMessage("Wszystkie wymagane pola muszą być wypełnione.");
      return;
    }

    fetch("http://localhost:8081/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Błąd wysyłania");
        return res.json();
      })
      .then(() => {
        setSuccessMessage("Dziękujemy! Twoja wiadomość została wysłana.");
        setErrorMessage(null);
        setFormData({
          name: "",
          email: "",
          message: "",
          subject: "",
          country: "pl",
        });
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage("Nie udało się wysłać wiadomości.");
      });
  };

  return (
    <div className="contact">
      <div className="contact-content">
        <div className="contact1"></div>
        <div className="contact2">
          <motion.div
            className="contact-form"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="title-style">Skontaktuj się z nami</h2>

            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

            <form onSubmit={handleSubmit}>
              <div className="labels">
                <div className="label1">
                  <label className="form-label" htmlFor="name">Imię:</label><br />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="label2">
                  <label htmlFor="email">Twój email:</label><br />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <label htmlFor="message">Twoja wiadomość:</label><br />
              <textarea
                name="message"
                id="message"
                rows="2"
                cols="30"
                value={formData.message}
                onChange={handleChange}
              /><br />

              <p className="reason">Wybierz główny powód wiadomości:</p>
              <div className="reason-radio">
                <input
                  type="radio"
                  id="one"
                  name="subject"
                  value="Zapytanie o książki"
                  checked={formData.subject === "Zapytanie o książki"}
                  onChange={handleChange}
                />
                <label htmlFor="one">Zapytanie o książki, np. dostępność</label><br />

                <input
                  type="radio"
                  id="two"
                  name="subject"
                  value="Funkcjonowanie portalu"
                  checked={formData.subject === "Funkcjonowanie portalu"}
                  onChange={handleChange}
                />
                <label htmlFor="two">Funkcjonowanie portalu biblioteki</label><br />

                <input
                  type="radio"
                  id="three"
                  name="subject"
                  value="Inny temat"
                  checked={formData.subject === "Inny temat"}
                  onChange={handleChange}
                />
                <label htmlFor="three">Inny temat</label><br />
              </div>

              <label htmlFor="country">Wybierz kraj, w którym mieszkasz z listy:</label><br />
              <select
                name="country"
                id="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="pl">Polska</option>
                <option value="ukr">Ukraina</option>
                <option value="sl">Słowacja</option>
                <option value="cz">Czechy</option>
                <option value="ge">Niemcy</option>
                <option value="li">Litwa</option>
                <option value="gb">Wielka Brytania</option>
                <option value="us">USA</option>
              </select><br /><br />

              <input type="submit" value="Wyślij wiadomość" className="btn btn-danger" />
            </form>
          </motion.div>
        </div>
        <div className="contact3"></div>
      </div>
      <div className="contact-img">
        <motion.div
          className="contact-form"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src={biblioImage} alt="Biblioteka" className="mx-auto d-block" />
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
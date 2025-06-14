import "../Contact/contact.css";
import { motion } from "framer-motion";
import biblioImage from "../../img/biblio2.jpeg";

function Contact() {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
      };

    return (
        <div className="contact">
            <div className="contact-content">
                <div className="contact1"></div>
                <div className="contact2">
                    <motion.div className="contact-form"  initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                    <h2 className="title-style">Skontaktuj sie z nami</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="labels">
                        <div className="label1">
                            <label className="form-label" htmlFor="name">Imię: </label><br />
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="label2">
                            <label htmlFor="email">Twój email: </label><br />
                            <input type="text" name="email" id="email"/>
                        </div>
                        </div>
                        <label htmlFor="message">Twoja wiadomość: </label><br />
                        <textarea name="message" id="message" rows="2" cols="30" /><br />
                        <p className="reason">Wybierz główny powód wiadomości: </p>
                        <div className="reason-radio">
                            <input type="radio" id="one" name="subject" value="One" />
                            <label htmlFor="one">Zapytanie o książki, np. dostępność</label><br />

                            <input type="radio" id="two" name="subject" value="Two" />
                            <label htmlFor="two">Funkcjonowanie portalu biblioteki</label><br />

                            <input type="radio" id="three" name="subject" value="Three" />
                            <label htmlFor="three">Inny temat</label><br />
                        </div>
                        <label htmlFor="country">Wybierz kraj, w którym mieszkasz z listy:</label><br />
                        <select name="country" id="country">
                            <option value="pl">Polska</option>
                            <option value="ukr">Ukraina</option>
                            <option value="sl">Słowacja</option>
                            <option value="cz">Czechy</option>
                            <option value="ge">Niemcy</option>
                            <option value="li">Litwa</option>
                            <option value="gb">Wielka Brytania</option>
                            <option value="us">USA</option>
                        </select><br />
                        <br />
                        <input type="submit" value="Wyślij wiadomość" className="btn btn-danger"/>
                    </form>
                </motion.div>
                </div>
                <div className="contact3"></div>
            </div>
            <div className="contact-img">
            <img src={biblioImage} alt="Biblioteka" className="mx-auto d-block"/>
            </div>
        </div>
    )}
export default Contact
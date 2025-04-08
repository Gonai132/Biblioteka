import { motion } from "framer-motion";
import "../About/about.css"

function About() {
    return (
        <div className="container about">
            <div className="about-content">
                <div className="about1">
                    <motion.div className="about1-image" initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }} transition={{ duration:0.7 }}></motion.div>
                </div>
                <motion.div className="about2"  initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                    <h2>Jesteśmy jedyną taką biblioteką!</h2>
                    <p>Naszą pasją są książki, dlatego z zamiłowania do nich stworzyliśmy tę bibliotekę online, która umożliwi Wam łatwe i przyjemne przeglądanie katalogu dostępnych u nas książek z komfortu własnej kanapy.</p>
                    <p>Poza tym możecie u nas w bajecznie prosty sposób zwrócić książkę do systemu lub zarezerwować jej wypożyczenie!</p>
                    <p>Jeśli tylko macie jakieś pytania lub wątpliwości zawsze możecie do nas napisać, a ktoś z obsługi szybko odpowie na Waszą wiadomość.</p>
                    <p>Miłego czytania i do zobaczenia!</p>
                </motion.div>
                <div className="about3">
                <motion.div className="about2-image"  initial={{ opacity: 0, x: 500 }} animate={{ opacity: 1, x: 0 }} transition={{ duration:0.7 }}></motion.div>
                </div>
            </div>
        </div>
    )}
export default About
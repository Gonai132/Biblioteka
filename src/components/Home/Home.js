import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";
import React, { useState } from 'react';
import { Link } from "react-router-dom"; 
import './home.css';

function Home() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className='home'>
            <div className='home-content'>
        <h1 className='home-title'>
          <Typewriter
            options={{
              strings: ['Jedyna taka Biblioteka online!', 'Sprawdź katalog książek','Wypożycz książkę zdalnie', 'Zwróć wygodnie książki', 'Skontaktuj się z nami'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <motion.p className='' initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>Witaj na naszym portalu Biblioteki online! Tutaj sprawnie przejrzysz katalog dostępnych książek, a także wypożyczysz i zwrócisz książki zdalnie bez wychodzenia z domu :) W razie pytań - skontaktuj się z nami!</motion.p>
        <span
          className='home-button'
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}>
        <Link to="/about" className='active-nav'>Zobacz więcej</Link>
        </span>
      </div>
      </div>
    )
        
}
export default Home
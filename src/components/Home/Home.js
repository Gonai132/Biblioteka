import Typewriter from 'typewriter-effect';
import React, { useState } from 'react';
import {Link} from 'react-scroll';
import './home.css';

function Home() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className='container home'>
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
        <p className='col-xl-5 col-lg-5 col-mid-5 col-sm-7 col-7'>Witaj na naszym portalu Biblioteki online! Tutaj sprawnie przejrzysz katalog dostępnych książek, a także wypożyczysz i zwrócisz książki zdalnie bez wychodzenia z domu :) W razie pytań - skontaktuj się z nami!</p>
        <span
          className='home-button col-xl-4 col-lg-4 col-mid-4 col-sm-6 col-8'
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)} 
        ><Link to="about" spy={true} smooth={true} offset={-20} duration={100} activeClass="active-nav">Zobacz więcej</Link>
        </span>
      </div>
      </div>
    )
        
}
export default Home
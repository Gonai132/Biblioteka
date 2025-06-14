import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "./navbar.css";
import "./navbarmobile.css";
import LogoImg from "../../img/logoB.png";

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);

  const handleNavbar = () => {
    setOpen(!open);
  };

  const closeNavbar = () => {
    setOpen(false);
  };

  return (
    <div className='responsive-mobile-view'>
      <div className='container-fluid mobile-view-header'>
        <p onClick={handleNavbar}><GiHamburgerMenu size={30} /></p>
        <Link to="/books"><img src={LogoImg} alt="Biblioteka logo" height={35}/></Link>
      </div>
      {open && (
        <div className='mobile-nav'>
          <ul>
            <li className="nav-item home-nav">
              <Link to="/" onClick={closeNavbar}>
                <FontAwesomeIcon icon={faHome} size='20' /> Strona Główna
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" onClick={closeNavbar}>O nas</Link>
            </li>
            <li className="nav-item">
              <Link to="/books" onClick={closeNavbar}>Książki</Link>
            </li>
            <li className="nav-item">
              <Link to="/edit" onClick={closeNavbar}>Edytor</Link>
            </li>
            <li className="nav-item">
              <Link to="/return" onClick={closeNavbar}>Zwróć</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" onClick={closeNavbar}>Kontakt</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarMobile;
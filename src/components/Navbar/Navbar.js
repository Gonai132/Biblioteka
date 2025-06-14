import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css";
import LogoImg from "../../img/logoB.png";

const Navbar = () => {

  return (
    <nav className="navbar-main">
      <ul>
        <li className="nav-item home-nav">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </li>
        <li className="nav-item gap"> <Link to="/books"> <img src={LogoImg} alt="Biblioteka logo" height={40}/> </Link></li>
        <li className="nav-item">
          <Link to="/about">O nas</Link>
        </li>
        <li className="nav-item">
          <Link to="/books">Książki</Link>
        </li>
        <li className="nav-item">
          <Link to="/edit">Edytor</Link>
        </li>
        <li className="nav-item">
          <Link to="/return">Zwróć</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
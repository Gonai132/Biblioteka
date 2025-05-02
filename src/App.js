import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import NavbarMobile from './components/Navbar/NavbarMobile';
import Home from './components/Home/Home';
import About from './components/About/About';
import Books from './components/Books/Books';
import Edit from './components/Edit/Edit';
import EditSelect from './components/Edit/EditSelect';
import Return from './components/Return/Return';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';



function AppContent() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <NavbarMobile />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/edit" element={<EditSelect />} />
        <Route path="/books/edit/:id" element={<Edit />} />
        <Route path="/return" element={<Return />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {(location.pathname !== "/" && location.pathname !== "/books" && location.pathname !== "/return") && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
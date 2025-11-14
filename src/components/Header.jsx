import React, { useState } from "react";
import "../styles/Header.css";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <div className="logo-container">
        <motion.img
          src={logo}
          alt="Sahajanand Vidyalaya Logo"
          className="logo"
          whileHover={{ scale: 1.05 }}
        />
        <h2 className="school-name">સહજાનંદ વિદ્યાલય</h2>
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>હોમ</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>શાળા વિશે</Link>
        <Link to="/gallery" onClick={() => setMenuOpen(false)}>ગેલેરી</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>અમારો સંપર્ક કરો</Link>

        <motion.a
          href="https://wa.me/+919979972123"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaWhatsapp size={18} /> વધુ માહિતી માટે
        </motion.a>
      </nav>

      {/* Hamburger Menu */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </motion.header>
  );
};

export default Header;

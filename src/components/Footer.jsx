import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaYoutube, FaLandmark, FaLocationArrow, FaMapMarkedAlt, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Footer.css";
import logo from "../assets/logo.png"; // path to your school logo

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-container">
        {/* === Left: Logo & About === */}
        <div className="footer-section about">
          <img src={logo} alt="Sahjanand Vidyalaya Logo" className="footer-logo" />
          <h2>સહજાનંદ વિદ્યાલય</h2>
          <p>
            ગુણવત્તાયુક્ત શિક્ષણ, નૈતિક મૂલ્યો અને સર્વાંગી વિકાસ દ્વારા વિદ્યાર્થીઓને સશક્ત બનાવવું. સાથે મળીને, આપણે આજે આવતીકાલના નેતાઓનું પોષણ કરીએ છીએ.
          </p>
        </div>

        {/* === Middle: Quick Links === */}
        <div className="footer-section links">
          <h3></h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        {/* === Right: Contact Info === */}
        <div className="footer-section contact">
          <h3>Contact Info</h3>
          <p><FaPhoneAlt /> <a href="tel+919979972123"> +૯૧-૯૯૭૯૯૭૨૧૨૩ / +૯૧-૯૯૦૯૪૯૪૮૯૮ </a></p>
          <p><FaEnvelope /> <a href="mailto:shajanand1999@gmail.com">shajanand1999@gmail.com</a></p>
          <p><FaMapMarkerAlt/>ત્રિદેવ પાર્ક, વસ્ત્રાલ રોડ, અમદાવાદ, ગુજરાત 382418</p>
          <div className="social-icons">
            <a              href="https://m.facebook.com/profile.php?id=61571233400590&ref=ig_profile_ac&target=61571233400590&wtsid=rdr_0sX92WxbVtn4eNF1y"
 target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a               href="https://www.instagram.com/sahjanand_vidhyalaya_vastral?igsh=dzd3NGh0anNsbWg5"
 target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a               href="https://m.youtube.com/@sahjanandvidyalayavastral?fbclid=PAZnRzaAOBA75leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaf8oSTA-dgcoJc0liV2Ztxwb1ENvWN6NbHD5bcTVKmFXIN6bWVNt6hGOHZiWw_aem_k-j753Z6wrCao_a0DP0uVg"
 target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* === Bottom Copyright Bar === */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sahjanand Vidyalaya | All Rights Reserved</p>
      </div>
    </motion.footer>
  );
};

export default Footer;

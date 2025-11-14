import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaYoutube,
} from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <motion.section
        className="contact-header"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>અમારો સંપર્ક કરો</h1>
        <p>
         અમને તમારા તરફથી સાંભળવું ગમશે! ભલે તમને કોઈ પ્રશ્ન હોય, વધુ માહિતીની જરૂર હોય,
અથવા જોડાવા માંગતા હો, તો સહજાનંદ વિદ્યાલયનો સંપર્ક કરવા માટે નિઃસંકોચ રહો.
        </p>
      </motion.section>

      <div className="contact-container">
        {/* Left Section: Contact Info */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>સંપર્કમાં રહો</h2>

          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <a href="tel:+919979972123">+૯૧-૯૯૭૯૯૭૨૧૨૩ / +૯૧-૯૯૦૯૪૯૪૮૯૮  </a>
          </div>

          <div className="info-item">
            <FaEnvelope className="icon" />
            <a href="mailto:shajanand1999@gmail.com">
              shajanand1999@gmail.com
            </a>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <a
              href="https://www.google.com/maps/place/Sahjanand+Vidyalaya,+Tridev+Park+Shopping+Center,+Vastral+Road,+opp.+Swagat+Society,+Mahadev+Nagar+Tekra,+Ahmedabad,+Gujarat+382418"
              target="_blank"
              rel="noopener noreferrer"
            >
             ત્રિદેવ પાર્ક, વસ્ત્રાલ રોડ, અમદાવાદ, ગુજરાત 382418
            </a>
          </div>

          <div className="social-icons">
            <a
              href="https://m.facebook.com/profile.php?id=61571233400590&ref=ig_profile_ac&target=61571233400590&wtsid=rdr_0sX92WxbVtn4eNF1y"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/sahjanand_vidhyalaya_vastral?igsh=dzd3NGh0anNsbWg5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://m.youtube.com/@sahjanandvidyalayavastral?fbclid=PAZnRzaAOBA75leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaf8oSTA-dgcoJc0liV2Ztxwb1ENvWN6NbHD5bcTVKmFXIN6bWVNt6hGOHZiWw_aem_k-j753Z6wrCao_a0DP0uVg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <FaYoutube />
            </a>
          </div>
        </motion.div>

        {/* Right Section: Google Map */}
        <motion.div
          className="contact-map"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            title="Sahjanand Vidyalaya Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5933948259044!2d72.65142047554298!3d23.001974779188252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8636326cfb37%3A0x4a5ca286be011e8a!2sSahajanand%20Vidyalaya!5e0!3m2!1sen!2sin!4v1762925822212!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

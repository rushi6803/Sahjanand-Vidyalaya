import React from "react";
import { motion } from "framer-motion";
import "../styles/Academics.css";
import playgroupImg from "../assets/School.jpg";
import classImg from "../assets/School.jpg";
import commerceImg from "../assets/School.jpg";

const Academics = () => {
  const standards = [
    { title: "Playgroup - Kindergarten", img: playgroupImg, desc: "Foundational play-based learning." },
    { title: "Primary (1-5)", img: classImg, desc: "Focus on literacy, numeracy & habits." },
    { title: "Secondary (6-10)", img: classImg, desc: "Strong academics blended with sports and arts." },
    { title: "Senior Secondary (11-12 Commerce)", img: commerceImg, desc: "Commerce stream with professional coaching." },
  ];

  return (
    <main className="academics-page container">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        Academics & Timings
      </motion.h2>

      <section className="timings">
        <h3>School Timings</h3>
        <ul>
          <li>Playgroup: 9:00 AM — 11:30 AM</li>
          <li>Primary: 8:30 AM — 2:00 PM</li>
          <li>Secondary: 8:00 AM — 2:30 PM</li>
          <li>Senior Secondary: 8:00 AM — 3:00 PM</li>
        </ul>
      </section>

      <section className="standards">
        {standards.map((s, i) => (
          <motion.article
            className="standard"
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
          >
            <img src={s.img} alt={s.title} />
            <div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          </motion.article>
        ))}
      </section>
    </main>
  );
};

export default Academics;

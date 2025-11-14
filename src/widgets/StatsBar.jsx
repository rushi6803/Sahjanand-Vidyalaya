import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "../styles/StatsBar.css";

const StatsBar = () => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  // Animate number count up to 20000
  useEffect(() => {
    let start = 0;
    const end = 20000;
    const duration = 3000; // 3 seconds
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 100;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, stepTime);

    controls.start({ width: "100%" }); // bar animation
  }, [controls]);

  return (
    <section className="stats-bar-section">
      <motion.div
        className="stats-bar-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="stats-title">🎓 “૧૯૯૯ થી તેજસ્વી ભવિષ્ય ઘડતા”</h3>
        <div className="bar-wrapper">
          <motion.div
            className="progress-bar"
            initial={{ width: 0 }}
            animate={controls}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
        <p className="stats-text">
          <span className="count">{count.toLocaleString()}+</span> આજ સુધી ભણાવેલા વિદ્યાર્થીઓ
        </p>
      </motion.div>
    </section>
  );
};

export default StatsBar;

import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";
import heroImg from "../assets/bg.jpg";
import Testimonials from "../widgets/Testimonials";
import WhatWeOffer from "../widgets/WhatWeOffer";
import StatsBar from "../widgets/StatsBar";


const Home = () => {
  return (
    <main className="home-page">
      {/* HERO SECTION */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImg})` }}
        id="home"
      >
        <div className="overlay" />
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="hero-title">“શિક્ષણ, સંસ્કાર અને સફળતાનું ઘર — સહજાનંદ વિદ્યાલય”</h1>
          <p className="slogan">"મૂલ્યો સાથે શીખવું, શ્રેષ્ઠતા સાથે નેતૃત્વ કરવું"</p>
          <motion.a
            href="/about"
            className="learn-more-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            વધુ જાણો
          </motion.a>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="home-about container">
        <motion.div
          className="about-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>આજના જ્ઞાનથી ઉજ્જવળ ભવિષ્યનું નિર્માણ</h2>
          <p>
            સહજાનંદ વિદ્યાલય એક અગ્રણી સંસ્થા છે જે ગુણવત્તાયુક્ત શિક્ષણ પ્રદાન કરવા માટે સમર્પિત છે જે બૌદ્ધિક વિકાસ, નૈતિક મૂલ્યો અને એકંદર વિકાસને પોષે છે. શૈક્ષણિક શ્રેષ્ઠતા અને સર્વાંગી શિક્ષણમાં મજબૂત પાયા સાથે, અમે વિદ્યાર્થીઓને જ્ઞાન, સર્જનાત્મકતા અને વિવેચનાત્મક વિચારસરણી કૌશલ્યથી સશક્ત બનાવવાનો પ્રયાસ કરીએ છીએ. અમારા અનુભવી ફેકલ્ટી, આધુનિક માળખાગત સુવિધાઓ અને વિદ્યાર્થી-કેન્દ્રિત અભિગમ એક પ્રેરણાદાયી વાતાવરણ બનાવે છે જ્યાં યુવા મન ખીલે છે.
          </p>
          <p>
            સહજાનંદ વિદ્યાલયમાં, અમે અમારા વિદ્યાર્થીઓને ઉજ્જવળ ભવિષ્ય માટે તૈયાર કરવા માટે શિસ્ત, નવીનતા અને નૈતિક મૂલ્યોની સંસ્કૃતિને પ્રોત્સાહન આપવામાં માનીએ છીએ. સમાજમાં સકારાત્મક યોગદાન આપતા જવાબદાર અને આત્મવિશ્વાસુ વ્યક્તિઓને ઘડવાની અમારી સફરમાં અમારી સાથે જોડાઓ. </p>
          <p>
           સહજાનંદ વિદ્યાલયમાં, અમે વિદ્યાર્થીઓમાં જિજ્ઞાસા, સર્જનાત્મકતા અને પૂછપરછની ભાવનાને પ્રોત્સાહન આપવામાં માનીએ છીએ. અમે સહ-અભ્યાસક્રમ અને અભ્યાસેતર પ્રવૃત્તિઓમાં ભાગ લેવા, નેતૃત્વ, ટીમવર્ક અને વ્યક્તિગત વિકાસને પ્રોત્સાહન આપવા માટે પ્રોત્સાહિત કરીએ છીએ.
          </p>
          <p>
            અમારું ધ્યેય એવા જવાબદાર વૈશ્વિક નાગરિકોને કેળવવાનું છે જેઓ માત્ર જ્ઞાની જ નહીં, પણ દયાળુ અને નૈતિક વ્યક્તિઓ પણ હોય. શૈક્ષણિક કઠોરતા અને મૂલ્ય-આધારિત શિક્ષણ પ્રત્યે પ્રતિબદ્ધતા સાથે, અમે આવતીકાલના ભાવિ નેતાઓને ઘડવાનો પ્રયાસ કરીએ છીએ.
          </p>
        </motion.div>
       
        <motion.div
          className="about-highlights"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="highlight-card">
            <h4>અનુભવી શિક્ષકો</h4>
            <p>શિક્ષકો — જે વિચારને પ્રેરિત કરે છે, સપના ઘડે છે અને ભવિષ્યનું નિર્માણ કરે છે</p>
          </div>
          <div className="highlight-card">
            <h4>સર્વગ્રાહી વિકાસ</h4>
            <p>શૈક્ષણિક, રમતગમત અને સહ-અભ્યાસિક શ્રેષ્ઠતાનું સંતુલન.</p>
          </div>
          <div className="highlight-card">
            <h4>આધુનિક ઈન્ફ્રાસ્ટ્રક્ચર</h4>
            <p>સ્માર્ટ વર્ગખંડો, પુસ્તકાલય, કમ્પ્યુટર લેબ અને સલામત વાતાવરણ.</p>
          </div>
        </motion.div>
      </section>
       <WhatWeOffer/>
        <StatsBar/>
      {/* TESTIMONIALS SECTION */}
      <section className="home-testimonials">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            માતા-પિતા અને ભૂતપૂર્વ વિદ્યાર્થીઓની સમીક્ષાઓ
          </motion.h2>
          <Testimonials />
        </div>
      </section>
    </main>
  );
};

export default Home;

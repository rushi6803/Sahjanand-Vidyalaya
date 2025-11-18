import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";
import img1 from "../assets/who1.JPG";
import img2 from "../assets/philo.png";
import img3 from "../assets/event1.png";

const About = () => {
  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <motion.section
        className="about-hero"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>સહજાનંદ વિદ્યાલય વિશે</h1>
        <p>
          અમારી સ્થાપનાથી જ મૂલ્ય-આધારિત શિક્ષણ, સર્વાંગી શિક્ષણ,
અને શ્રેષ્ઠતા પ્રત્યે પ્રતિબદ્ધતા દ્વારા પેઢીઓને પ્રેરણા આપવી.
        </p>
      </motion.section>

      {/* SECTION 1 */}
      <motion.section
        className="about-section reverse"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="about-text">
          <h2>અમે કોણ છીએ</h2>
          <p>
            સહજાનંદ વિદ્યાલય એક પ્રતિષ્ઠિત સંસ્થા છે જે
શૈક્ષણિક શ્રેષ્ઠતા અને નૈતિક અને સાંસ્કૃતિક વિકાસનું મિશ્રણ કરે છે. દાયકાઓના સમર્પણ સાથે, અમારી શાળાએ હજારો વિદ્યાર્થીઓના ભવિષ્યને આકાર આપ્યો છે,
નેતૃત્વ, કરુણા અને બૌદ્ધિક જિજ્ઞાસાને પ્રોત્સાહન આપ્યું છે.
          </p>
          <p>
            અમારા ફેકલ્ટી પ્રતિબદ્ધ માર્ગદર્શકો છે જે વિદ્યાર્થીઓને પાઠ્યપુસ્તકોથી આગળ જ્ઞાન શોધવા - તેમને જવાબદાર, આત્મવિશ્વાસુ અને નવીન નાગરિકો બનવા માટે તૈયાર કરવા માર્ગદર્શન આપે છે.
          </p>
        </div>
        <div className="about-image">
          <img src={img1} alt="Sahjanand Campus" />
        </div>
      </motion.section>

      {/* SECTION 2 */}
      <motion.section
        className="about-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="about-image">
          <img src={img2} alt="Students Learning" />
        </div>
        <div className="about-text">
          <h2>આપણી ફિલોસોફી</h2>
          <p>
            સહજાનંદ વિદ્યાલયમાં શિક્ષણ ફક્ત શૈક્ષણિક વિષયો પૂરતું મર્યાદિત નથી - અમે
દરેક બાળકની ભાવનાત્મક, સામાજિક અને સર્જનાત્મક ક્ષમતા વિકસાવવા પર ધ્યાન કેન્દ્રિત કરીએ છીએ. શીખવા પ્રત્યેનો અમારો સંતુલિત અભિગમ વિદ્યાર્થીઓને
વિવેચનાત્મક રીતે વિચારવામાં, મુક્તપણે વ્યક્ત કરવામાં અને આત્મવિશ્વાસથી નેતૃત્વ કરવામાં મદદ કરે છે.
          </p>
          <p>
            શિસ્ત, નવીનતા અને સહયોગ દ્વારા, અમે એક એવું
સમાવિષ્ટ શિક્ષણ વાતાવરણ બનાવીએ છીએ જ્યાં દરેક વિદ્યાર્થી મૂલ્યવાન અને
શ્રેષ્ઠતા પ્રાપ્ત કરવા માટે સશક્ત અનુભવે છે.
          </p>
        </div>
      </motion.section>

      {/* SECTION 3 */}
      <motion.section
        className="about-section reverse"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="about-text">
          <h2>બિયોન્ડ એકેડેમિક્સ</h2>
          <p>
           અમારા સહ-અભ્યાસિક અને અભ્યાસેતર કાર્યક્રમો - સાંસ્કૃતિક કાર્યક્રમો
અને રમતગમતથી લઈને વિજ્ઞાન પ્રદર્શનો અને નેતૃત્વ શિબિરો સુધી - સર્જનાત્મકતા અને ટીમવર્કને પોષે છે. વિદ્યાર્થીઓ જીવન કૌશલ્યો શીખે છે જે તેમને સહાનુભૂતિશીલ અને સક્ષમ વ્યક્તિઓ તરીકે વિકાસ કરવામાં મદદ કરે છે.
          </p>
          <p>
            સહજાનંદ વિદ્યાલયમાં નાની કે મોટી દરેક સિદ્ધિની ઉજવણી કરવામાં આવે છે, જે આપણા વિદ્યાર્થીઓમાં આત્મવિશ્વાસ અને પ્રેરણાને પ્રોત્સાહન આપે છે.
          </p>
        </div>
        <div className="about-image">
          <img src={img3} alt="School Events" />
        </div>
      </motion.section>

      {/* MISSION & VISION */}
      <motion.section
        className="about-mission"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="mission-card">
          <h3>અમારું મિશન</h3>
          <p>
           બુદ્ધિ, નીતિશાસ્ત્ર અને
સર્જનાત્મકતાને પોષતું સર્વાંગી શિક્ષણ પૂરું પાડવું - વિદ્યાર્થીઓને આજીવન શીખનારા અને
દયાળુ નેતાઓ બનવા માટે સશક્ત બનાવવું.
          </p>
        </div>
        <div className="mission-card">
          <h3>અમારું વિઝન</h3>
          <p>
           પરંપરા અને નવીનતા વચ્ચે શ્રેષ્ઠતાનું કેન્દ્ર બનવું, 
વિદ્યાર્થીઓને સમાજ અને વિશ્વમાં સકારાત્મક યોગદાન આપવા માટે પ્રેરણા આપવી.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default About;

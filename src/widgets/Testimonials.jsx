import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "દીપિકા પટેલ",
      role: "ધોરણ 8 ના વિદ્યાર્થીના માતા",
      text: "સહજાનંદ વિદ્યાલય મારી દીકરી માટે એક અદ્ભુત સફર રહી છે. શિક્ષકો કાળજી રાખે છે, અને શાળા શૈક્ષણિક અને વ્યક્તિગત વિકાસ પર સમાન રીતે ધ્યાન કેન્દ્રિત કરે છે.",
    },
    {
      name: "રાજેશ જોટણીયા",
      role: "ભૂતપૂર્વ વિદ્યાર્થી (૨૦૧૫નો બેચ)",
      text: "સહજાનંદ વિદ્યાલયમાં મારા વર્ષોએ મને શિસ્ત, નેતૃત્વ અને ટીમવર્ક શીખવ્યું. મેં અહીં બનાવેલો પાયો આજે પણ મારી કારકિર્દીમાં મને મદદ કરે છે.",
    },
    {
      name: "પલકબેન દેસાઈ",
      role: "ધોરણ ૫ ના વિદ્યાર્થીના માતા-પિતા",
      text: "શાળા દ્વારા મૂલ્યો આધારિત શિક્ષણ અને સહ-અભ્યાસિક પ્રવૃત્તિઓ પર ભાર મૂકવામાં આવતાં મારા પુત્રને વધુ આત્મવિશ્વાસ અને જિજ્ઞાસા પ્રાપ્ત થઈ છે.",
    },
    {
      name: "અમિત ભટ્ટ",
      role: "૧૨મા કોમર્સના વિદ્યાર્થીના માતા-પિતા",
      text: "ઉત્તમ ફેકલ્ટી, સહાયક સંચાલન અને સકારાત્મક વાતાવરણ - ખરેખર અમદાવાદની શ્રેષ્ઠ શાળાઓમાંની એક!",
    },
    {
      name: "હિતેશ પ્રજાપતિ",
      role: "ધોરણ 9 વિદ્યાર્થીના પિતા",
      text: "આ શાળા ગુણવત્તાયુક્ત શિક્ષણ અને સંસ્કાર આપવા માટે શ્રેષ્ઠ વિકલ્પ છે. હું આ શાળાની હૃદયપૂર્વક ભલામણ કરું છું.",
    },
    {
      name: "અનિલભાઈ પ્રજાપતિ",
      role: "ભૂતપૂર્વ વિદ્યાર્થી (પી.આઈ. ક્રાઈમ બ્રાન્ચ ગુજરાત)",
      text: "સહજાનંદ વિદ્યાલયે મને જીવનમાં સફળતા મેળવવા માટે મજબૂત પાયો આપ્યો — આ સંસ્થા પર મને ગર્વ છે.",
    },
    {
      name: "વિનોદભાઈ પટેલ",
      role: "ધોરણ 10 વિદ્યાર્થીના પિતા",
      text: "સહજાનંદ વિદ્યાલયે અમારા બાળકને ઉત્તમ શિક્ષણ સાથે સંસ્કારી અને આત્મવિશ્વાસી બનાવ્યું છે — એક વિશ્વાસપૂર્ણ સંસ્થા.",
    },


  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        className="testimonial-slider"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <p className="testimonial-text">“{t.text}”</p>
              <h4 className="testimonial-name">{t.name}</h4>
              <p className="testimonial-role">{t.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Gallery.css";

// Import your gallery images from assets
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/13.png";
import img4 from "../assets/14.jpg";
import img5 from "../assets/15.jpg";
import img6 from "../assets/16.jpg";
import img7 from "../assets/19.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
import img11 from "../assets/11.jpg";
import img12 from "../assets/12.jpg";
import img13 from "../assets/20.jpg";
import img14 from "../assets/21.png";
import img15 from "../assets/22.png";
import img16 from "../assets/23.png";
import img17 from "../assets/24.png";
import img18 from "../assets/25.jpg";
import img19 from "../assets/26.jpg";
import img20 from "../assets/27.png";
import img21 from "../assets/28.png";
import img22 from "../assets/29.png";
import img23 from "../assets/30.png";
import img24 from "../assets/31.png";
import img25 from "../assets/32.jpg";
import img26 from "../assets/33.jpg";
import img27 from "../assets/34.png";
import img28 from "../assets/35.jpg";
import img29 from "../assets/36.jpg";
import img30 from "../assets/37.jpg";
import img31 from "../assets/38.jpg";
import img32 from "../assets/39.jpg";
import img33 from "../assets/40.jpg";
import img34 from "../assets/41.jpg";
import img35 from "../assets/42.jpg";
import img36 from "../assets/43.jpg";
import img37 from "../assets/44.jpg";
import img38 from "../assets/45.jpg";
import img39 from "../assets/46.jpg";
import img40 from "../assets/47.jpg";
import img42 from "../assets/49.jpg";
import img43 from "../assets/50.jpg";
import img44 from "../assets/51.jpg";
import img45 from "../assets/52.jpg";
import img46 from "../assets/53.jpg";
import img47 from "../assets/54.jpg";
import img48 from "../assets/55.jpg";
import img49 from "../assets/56.jpg";
import img50 from "../assets/57.jpg";
import img51 from "../assets/58.jpg";
import img52 from "../assets/59.jpg";
import img53 from "../assets/60.jpg";
import img54 from "../assets/61.jpg";
import img56 from "../assets/63.jpg";
import img57 from "../assets/64.jpg";
import img58 from "../assets/65.jpg";
import img60 from "../assets/66.jpg";
import img61 from "../assets/67.jpg";
import img62 from "../assets/68.jpg";
import img63 from "../assets/69.jpg";
import img64 from "../assets/70.jpg";
import img65 from "../assets/71.jpg";
import img66 from "../assets/72.jpg";
import img67 from "../assets/73.jpg";
import img68 from "../assets/74.jpg";
import img69 from "../assets/75.jpg";


const images = [img31,img32,img33,img34,img35,img36,img37,img38,img39,img40,
 img42,img43,img44,img45,img46,img47,img48,img49,img50,
  img51,img52,img53,img54,img61,img62,img63,img64,img65,
  img66,img67,img68,img69,img56,img57,img58,img60,
  img1, img2, img3, img4, img5, img6,img7,img8,
  img9,img10,img11,img12,img13, img14, img15, img16, img17, 
  img18,img20,img21,img22,img23,img24,img26,img27,img28,img29,img30,
  
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-page">
      <motion.div
        className="gallery-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>સાંસ્કૃતિક કાર્યક્રમો અને અન્ય કાર્યક્રમો</h1>
        <p>
          સહજાનંદ વિદ્યાલયના જીવંત જીવનની એક ઝલક - અમારા વિદ્યાર્થીઓ,
ઘટનાઓ અને યાદગાર ક્ષણો.
        </p>
      </motion.div>

      {/* Image Grid */}
      <motion.div
        className="gallery-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {images.map((image, index) => (
          <motion.div
            className="gallery-item"
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image} alt={`Gallery ${index + 1}`} loading="lazy" />
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox (Popup) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Enlarged"
              className="lightbox-img"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;

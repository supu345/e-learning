import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Img1 from "../../src/assets/photo1.jpg";
import Img2 from "../../src/assets/photo2.jpg";
import Img3 from "../../src/assets/photo3.jpg";
import Img4 from "../../src/assets/photo4.jpg";
import Img5 from "../../src/assets/photo5.jpg";
import Img6 from "../../src/assets/photo6.jpg";
import Img7 from "../../src/assets/photo7.jpg";
import Img8 from "../../src/assets/photo8.jpg";
import { motion } from "framer-motion";
import { SlideRight } from "../../src/utility/animation";
const PhotoGallery = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[150px] px-9">
        <div className="py-3 text-center">
          <div className="flex flex-wrap gap-8 justify-center">
            <motion.img
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src={Img1}
              alt="Img1"
              className="w-[300px] h-[300px] rounded-md"
            />
            <motion.img
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src={Img2}
              alt="Img2"
              className="w-[300px] h-[300px] rounded-md"
            />
            <motion.img
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src={Img3}
              alt="Img3"
              className="w-[300px] h-[300px] rounded-md"
            />
            <motion.img
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src={Img4}
              alt="Img4"
              className="w-[300px] h-[300px] rounded-md"
            />
            <motion.img
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src={Img5}
              alt="Img5"
              className="w-[300px] h-[300px] rounded-md"
            />
            <motion.img
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src={Img6}
              alt="Img6"
              className="w-[300px] h-[300px] rounded-md"
            />
            <motion.img
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src={Img7}
              alt="Img7"
              className="w-[300px] h-[300px] rounded-md"
            />
            <motion.img
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src={Img8}
              alt="Img8"
              className="w-[300px] h-[300px] rounded-md"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PhotoGallery;

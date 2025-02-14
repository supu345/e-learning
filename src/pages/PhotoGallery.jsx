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
              src="https://images.pexels.com/photos/1206101/pexels-photo-1206101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Img1"
              className="w-[300px] h-[300px] rounded-md"
            />
            <motion.img
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src="https://images.pexels.com/photos/159579/crayons-coloring-book-coloring-book-159579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Img2"
              className="w-[300px] h-[300px] rounded-md"
            />
            <motion.img
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src="https://images.pexels.com/photos/731510/pexels-photo-731510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Img3"
              className="w-[300px] h-[300px] rounded-md"
            />
            <motion.img
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src="https://images.pexels.com/photos/374820/pexels-photo-374820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Img4"
              className="w-[300px] h-[300px] rounded-md"
            />
            <motion.img
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src="https://images.pexels.com/photos/5088188/pexels-photo-5088188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Img5"
              className="w-[300px] h-[300px] rounded-md"
            />
            <motion.img
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src="https://images.pexels.com/photos/5428155/pexels-photo-5428155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Img6"
              className="w-[300px] h-[300px] rounded-md"
            />
            <motion.img
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src="https://images.pexels.com/photos/3755511/pexels-photo-3755511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Img7"
              className="w-[300px] h-[300px] rounded-md"
            />
            <motion.img
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src="https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Img8"
              className="w-[300px] h-[300px] rounded-md"
            />
            <motion.img
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src="https://images.pexels.com/photos/1699414/pexels-photo-1699414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Img9"
              className="w-[300px] h-[300px] rounded-md"
            />
            <motion.img
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src="https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Img10"
              className="w-[300px] h-[300px] rounded-md"
            />
            <motion.img
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src="https://images.pexels.com/photos/159823/kids-girl-pencil-drawing-159823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Img10"
              className="w-[300px] h-[300px] rounded-md"
            />
            <motion.img
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src="https://images.pexels.com/photos/1708988/pexels-photo-1708988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Img10"
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

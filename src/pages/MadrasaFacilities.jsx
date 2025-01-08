import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { SlideUp } from "../../src/utility/animation";
const MadrasaFacilities = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[150px] container">
        <div className="py-3 text-center">
          <motion.p
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView={"visible"}
          >
            <p className=" text-green-600 font-semibold capitalize text-4xl">
              Our Facilities
            </p>
          </motion.p>
        </div>
        <motion.p
          variants={SlideUp(0.7)}
          initial="hidden"
          whileInView={"visible"}
        >
          <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
            <li>
              Teaching According To Arabic As Well As English Medium Curriculum
              (Edexcel/Cambridge Syllabus).
            </li>
            <li>
              Online Quran Recitation And Recitation Will Be Arranged By
              International Experts Qari from Different Countries Including
              Kuwait, Qatar And Bangladesh.
            </li>
            <li>Teaching By Experienced, Well-Skilled, Trained Teachers.</li>
            <li>To Finish All The Reading Responsibilities In The Madrasa.</li>
            <li>Round-The-Clock Monitoring (Via CCTV) System.</li>
          </ul>
        </motion.p>

        <div className="py-3 mt-8 ">
          <motion.p
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView={"visible"}
          >
            <p className=" text-green-600 font-semibold capitalize text-3xl">
              Hifzul Qur’an
            </p>
          </motion.p>

          <motion.p
            variants={SlideUp(0.7)}
            initial="hidden"
            whileInView={"visible"}
          >
            <p className="py-3">
              While attending the full time Hifz Program, students study core
              secular subjects at home and participate in the standardized
              testing. If needed, after school tutoring is also available to
              them. This arrangement facilities a smooth transition back into
              the regular school upon their completion of Quran memorization.
              Our Hifz School graduates are to performing students in their
              respective grades.
            </p>{" "}
          </motion.p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MadrasaFacilities;

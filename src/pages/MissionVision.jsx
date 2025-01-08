import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { SlideUp } from "../../src/utility/animation";
const MissionVision = () => {
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
            <p className=" text-green-600 font-semibold capitalize text-3xl underline">
              Our mission Statement
            </p>
          </motion.p>

          <motion.p
            variants={SlideUp(0.7)}
            initial="hidden"
            whileInView={"visible"}
          >
            <p className="py-5 text-xl text-start">
              Our mission is to provide a conducive learning environment that
              promotes the comprehensive education of Islamic principles,
              fostering critical thinking, moral values, and personal growth
              among students, preparing them to become compassionate and
              responsible members of society.
            </p>
          </motion.p>
        </div>
        <div className="py-3 text-center">
          <motion.p
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView={"visible"}
          >
            <p className=" text-green-600 font-semibold capitalize text-3xl underline">
              Our Vision Statement
            </p>
          </motion.p>

          <motion.p
            variants={SlideUp(0.7)}
            initial="hidden"
            whileInView={"visible"}
          >
            <p className="py-5 text-xl text-start">
              Our vision is to be a distinguished institution in Islamic
              education, recognized for its commitment to academic excellence,
              character formation, and community involvement, shaping
              individuals who embody the values of integrity, compassion, and
              service for the betterment of humanity.
            </p>
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;

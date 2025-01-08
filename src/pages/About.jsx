import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { SlideUp } from "../../src/utility/animation";
const About = () => {
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
              Who We Are
            </p>
          </motion.p>
          <motion.p
            variants={SlideUp(0.7)}
            initial="hidden"
            whileInView={"visible"}
          >
            <p className="py-5 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              ipsum placeat explicabo ducimus quos iusto atque aliquid fugit
              dolorum vitae illo soluta sapiente reiciendis animi a corrupti
              quia iure, voluptate ut excepturi. Quam blanditiis quia atque
              aperiam odio sit nihil, suscipit itaque, dolorum id, deleniti
              consequuntur a quod debitis. Enim minus repellendus veniam? Et
              ipsa qui, repellendus
            </p>
          </motion.p>
          <motion.p
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView={"visible"}
          >
            <p className="py-5 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              ipsum placeat explicabo ducimus quos iusto atque aliquid fugit
              dolorum vitae illo soluta sapiente reiciendis animi a corrupti
              quia iure, voluptate ut excepturi. Quam blanditiis quia atque
              aperiam odio sit nihil, suscipit itaque, dolorum id, deleniti
              consequuntur a quod debitis. Enim minus repellendus veniam? Et
              ipsa qui, repellendus
            </p>
          </motion.p>
          <motion.p
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView={"visible"}
          >
            <p className="py-5 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              ipsum placeat explicabo ducimus quos iusto atque aliquid fugit
              dolorum vitae illo soluta sapiente reiciendis animi a corrupti
              quia iure, voluptate ut excepturi. Quam blanditiis quia atque
              aperiam odio sit nihil, suscipit itaque, dolorum id, deleniti
              consequuntur a quod debitis. Enim minus repellendus veniam? Et
              ipsa qui, repellendus
            </p>
          </motion.p>
          <motion.p
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView={"visible"}
          >
            <p className="py-5 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              ipsum placeat explicabo ducimus quos iusto atque aliquid fugit
              dolorum vitae illo soluta sapiente reiciendis animi a corrupti
              quia iure, voluptate ut excepturi. Quam blanditiis quia atque
              aperiam odio sit nihil, suscipit itaque, dolorum id, deleniti
              consequuntur a quod debitis. Enim minus repellendus veniam? Et
              ipsa qui, repellendus
            </p>
          </motion.p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;

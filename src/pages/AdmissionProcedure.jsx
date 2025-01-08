import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { SlideUp } from "../../src/utility/animation";
const AdmissionProcedure = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[150px] container">
        <div className="py-3 ">
          <div className="py-3 mt-8 ">
            <motion.p
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
            >
              <p className=" text-green-600 font-semibold capitalize text-3xl">
                TO THE GUARDIANS
              </p>
            </motion.p>

            <motion.p
              variants={SlideUp(0.7)}
              initial="hidden"
              whileInView={"visible"}
            >
              <p className="py-3">
                The Key To Success Is Pure Intention, Full Trust In Allah,
                Strong Moral And All-Out Effort And Proper Evaluation Of Time.
                On The Other Hand The Reason For Failure Is Frustration And
                Laziness. Your Child And His Life, The Great Blessing Of Allah
                And The Future Of The Country And The Nation. The Sum Of Some
                Time Is Called Life. Every Moment Of His Life Is A Very Touching
                Deposit For Me And All Of You. Your Role As A Parent Is To
                Protect Hour Child In Every Aspect Of His Life And To Provide
                Him With A Good Education And Environment In Order To Develop
                Him As A Good Citizen. Ion Today’s Society, Arrogance In The
                Name Of Modernity, Subculture In The Name Of Socialism, Waste Of
                Time And Health In The Name Of Entertainment Has Made The Lives
                Of Children, Teenagers And Students Meaningless. Therefore, We
                Seek Your/Her Overall Cooperation In All The Academic
                Activities, Including The Appropriate Religious Education
                Materials For The Students, And The Rules And Regulations Given
                In The Guidelines.
              </p>{" "}
            </motion.p>
            <motion.p
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
            >
              <p className=" text-green-600 font-semibold capitalize text-2xl mt-3">
                WHICH MUST BE BROUGHT FOR ADMISSION
              </p>
            </motion.p>
            <motion.p
              variants={SlideUp(0.7)}
              initial="hidden"
              whileInView={"visible"}
            >
              <p className="py-3">1. Copies Of Student Passport Size Photo.</p>
              <p className="py-2">2. Student’s Birth Registration.</p>
              <p className="py-2">3. Copy Passport Size Photo Of Parent.</p>
              <p className="py-2">
                4. Photocopy Of The Voter ID Card Of The Parent (Father,
                Mother)/Guardian.
              </p>
            </motion.p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdmissionProcedure;

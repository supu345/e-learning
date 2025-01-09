import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdComputer } from "react-icons/md";
import FooterImg from "../../src/assets/footer.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../../src/utility/animation";
import logo from "../../src/assets/logo.jpg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { IoMdMailOpen } from "react-icons/io";
const FooterBg = {
  backgroundImage: `url(${FooterImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "bottom center",
};

const Footer = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div style={FooterBg} className="rounded-t-3xl">
      <div className="bg-primary/5">
        <div className="container">
          <div className="grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 text-black">
            {/* brand info section */}
            <motion.div
              variants={SlideUp(1.1)}
              initial="hidden"
              whileInView={"visible"}
              className="flex justify-center md:justify-start"
            >
              <div className="py-8 px-4 space-y-4">
                <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                  {/* <MdComputer className="text-secondary text-4xl" /> */}
                  <Link to="/">
                    <div className="text-xl flex items-center gap-2 font-bold">
                      <img src={logo} alt="img" className="w-[60px] h-[60px]" />
                      {/* <MdComputer className="text-3xl text-green-600" /> */}
                      <div className="text-center">
                        <p className="text-green-600">{t("header.Ekra")}</p>
                        <p>{t("header.ELearning")}</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Neque accusamus nulla labore cumque id ipsum molestias
                  architecto voluptatum saepe ab.
                </p>
                <div className="flex items-center justify-start gap-5 !mt-6">
                  <Link
                    to="https://www.facebook.com/profile.php?id=61571683171792"
                    className="hover:text-secondary duration-200"
                  >
                    <FaFacebook className="text-3xl text-blue-600" />
                  </Link>
                  <Link
                    to="https://www.youtube.com/@markazulimdadbangladesh"
                    className="hover:text-secondary duration-200"
                  >
                    <FaYoutube className="text-3xl text-red-500" />
                  </Link>
                  <Link
                    to="https://t.me/markazulimdadbangladesh"
                    className="hover:text-secondary duration-200"
                  >
                    <FaTelegramPlane className="text-3xl text-blue-500" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Footer Links  */}

            <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14">
              <motion.div
                variants={SlideUp(1.1)}
                initial="hidden"
                whileInView={"visible"}
                className="flex justify-center md:justify-start"
              >
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <Link
                        to="#"
                        className="hover:text-secondary duration-200"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="hover:text-secondary duration-200"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="hover:text-secondary duration-200"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="hover:text-secondary duration-200"
                      >
                        Login
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                variants={SlideUp(1.1)}
                initial="hidden"
                whileInView={"visible"}
                className="flex justify-center md:justify-start"
              >
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                    Resources
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <Link
                        to="#"
                        className="hover:text-secondary duration-200"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="hover:text-secondary duration-200"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="hover:text-secondary duration-200"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="hover:text-secondary duration-200"
                      >
                        Login
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
              <motion.div
                variants={SlideUp(1.1)}
                initial="hidden"
                whileInView={"visible"}
                className="flex justify-center md:justify-start"
              >
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                    Address
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <Link
                        to="/"
                        className="hover:text-secondary duration-200"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="hover:text-secondary duration-200"
                      >
                        markazulimdadbangladesh@gmail.com
                      </Link>
                    </li>

                    <li>
                      <p className="hover:text-secondary duration-200">House</p>
                    </li>
                    <li>
                      <p className="hover:text-secondary duration-200">
                        District
                      </p>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
          {/* copyright section  */}
          <div className="mt-8">
            <div className="text-center py-6 border-t-2 border-gray-800/10">
              <span className="text-sm text-black/60">
                {" "}
                @copyright 2025 codeWithFoyzun
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

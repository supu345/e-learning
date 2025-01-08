import React from "react";
import { motion } from "framer-motion";

const NavbarBanner = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="bg-green-600 text-sm text-center font-semibold p-1 lg:block relative text-white z-1000"
        style={{ position: "relative", marginTop: "100px" }}
      >
        Are you a university or school student looking for an online tutoring
        partnership?
        <a
          href="#"
          className="text-white bg-green-800 ml-2 px-2 py-1 rounded hover:bg-green-700 transition"
        >
          Talk to us
        </a>
        <div
          className="absolute top-1/2 right-10 cursor-pointer -translate-y-1/2"
          onClick={() => setIsOpen(false)}
        >
          X
        </div>
      </motion.div>
    )
  );
};

export default NavbarBanner;

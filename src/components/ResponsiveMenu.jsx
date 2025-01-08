import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownLinks,
  DropdownLinksAdmission,
  DropdownLinksGallery,
  DropdownLinksInformation,
} from "../mockData/data"; // Ensure this is imported properly
import { FaCaretDown } from "react-icons/fa";

const ResponsiveMenu = ({ isOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-40 lg:hidden"
        >
          <div className="text-md font-semibold uppercase bg-green-400 h-[600px] text-black py-10 mx-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
              {/* Menu Items */}
              <li>
                <a href="/" className="hover:text-green-600">
                  Home
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-green-600">
                  Contact
                </a>
              </li>

              {/* About Us Dropdown */}
              <li className="group relative cursor-pointer">
                <a
                  href="/about"
                  className="flex items-center font-semibold gap-2 hover:text-green-600"
                  aria-haspopup="true"
                >
                  About Us
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </a>
                <div
                  className="absolute right-0 z-50 hidden w-[200px]  bg-white p-2 text-black shadow-md rounded-md group-hover:block"
                  aria-hidden="true"
                >
                  <ul className="space-y-2">
                    {DropdownLinks.map((data) => (
                      <li key={data.name}>
                        <a
                          href={data.link}
                          className="block w-full p-2 rounded-md hover:bg-green-400 hover:text-white"
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              {/* Admission Dropdown */}
              <li className="group relative cursor-pointer">
                <a
                  href="/admission"
                  className="flex items-center font-semibold gap-2 hover:text-green-600"
                >
                  Admission
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </a>
                <div className="absolute right-0 z-50 hidden w-[220px] bg-white p-2 text-black shadow-md rounded-md group-hover:block">
                  <ul className="space-y-2">
                    {DropdownLinksAdmission.map((data) => (
                      <li key={data.name}>
                        <a
                          className="block w-full p-2 rounded-md hover:bg-green-400 hover:text-white"
                          href={data.link}
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              {/* Gallery Dropdown */}
              <li className="group relative cursor-pointer">
                <a
                  href="/gallery"
                  className="flex items-center font-semibold gap-2 hover:text-green-600"
                >
                  Gallery
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </a>
                <div className="absolute right-0 z-50 hidden w-[220px] bg-white p-2 text-black shadow-md rounded-md group-hover:block">
                  <ul className="space-y-2">
                    {DropdownLinksGallery.map((data) => (
                      <li key={data.name}>
                        <a
                          className="block w-full p-2 rounded-md hover:bg-green-400 hover:text-white"
                          href={data.link}
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              {/* Information Dropdown */}
              <li className="group relative cursor-pointer">
                <a
                  href="/information"
                  className="flex items-center font-semibold gap-2 hover:text-green-600"
                >
                  Information
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </a>
                <div className="absolute right-0 z-50 hidden w-[220px] bg-white p-2 text-black shadow-md rounded-md group-hover:block">
                  <ul className="space-y-2">
                    {DropdownLinksInformation.map((data) => (
                      <li key={data.name}>
                        <a
                          className="block w-full p-2 rounded-md hover:bg-green-400 hover:text-white"
                          href={data.link}
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;

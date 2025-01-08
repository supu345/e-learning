import React from "react";
import {
  NavbarMenu,
  DropdownLinks,
  DropdownLinksAdmission,
  DropdownLinksGallery,
  DropdownLinksInformation,
} from "../../src/mockData/data";
import { MdComputer, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu";
import { useTranslation } from "react-i18next";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../src/assets/logo.jpg";
const Navbar = () => {
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed top-0 w-full bg-white shadow-md z-50"
      >
        <div className="container flex justify-between items-center py-3">
          {/* Logo section */}
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

          {/* Menu section */}

          <div className="hidden lg:block">
            <ul className="flex items-center gap-2">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block  text-sm xl:text-base py-1 px-2 xl:px-2 hover:text-green-600 transition-all duration-300 font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
              <li className="group relative cursor-pointer">
                <a
                  href="/#home"
                  className="flex h-[72px] items-center font-semibold gap-[2px]"
                >
                  About Us
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </a>
                <div className="absolute -left-9 z-[9999] font-semibold hidden w-[200px] rounded-md bg-white p-2 text-black group-hover:block shadow-md">
                  <ul className="space-y-0">
                    {DropdownLinks.map((data) => (
                      <li key={data.name}>
                        <a
                          className="inline-block w-full rounded-md p-2 hover:text-green-600"
                          href={data.link}
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="group relative cursor-pointer">
                <a
                  href="/#home"
                  className="flex h-[72px] items-center font-semibold gap-[2px]"
                >
                  Admission
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </a>
                <div className="absolute -left-9 z-[9999] font-semibold hidden w-[220px] rounded-md bg-white p-2 text-black group-hover:block shadow-md">
                  <ul className="space-y-0">
                    {DropdownLinksAdmission.map((data) => (
                      <li key={data.name}>
                        <a
                          className="inline-block w-full rounded-md p-2 hover:text-green-600"
                          href={data.link}
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="group relative cursor-pointer">
                <a
                  href="/#home"
                  className="flex h-[72px] items-center font-semibold gap-[2px]"
                >
                  Gallery
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </a>
                <div className="absolute -left-9 z-[9999] font-semibold hidden w-[220px] rounded-md bg-white p-2 text-black group-hover:block shadow-md">
                  <ul className="space-y-0">
                    {DropdownLinksGallery.map((data) => (
                      <li key={data.name}>
                        <a
                          className="inline-block w-full rounded-md p-2 hover:text-green-600"
                          href={data.link}
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="group relative cursor-pointer">
                <a
                  href="/#home"
                  className="flex h-[72px] items-center font-semibold gap-[2px]"
                >
                  Information
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </a>
                <div className="absolute -left-9 z-[9999] font-semibold hidden w-[220px] rounded-md bg-white p-2 text-black group-hover:block shadow-md">
                  <ul className="space-y-0">
                    {DropdownLinksInformation.map((data) => (
                      <li key={data.name}>
                        <a
                          className="inline-block w-full rounded-md p-2 hover:text-green-600"
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
          {/* CTA Button section */}

          <div className="hidden lg:block space-x-6">
            <Link to="/login">
              <button className="font-semibold">Login</button>
            </Link>
            <Link to="/register">
              <button className="text-white bg-green-600 font-semibold rounded-full px-6 py-2 ">
                Register
              </button>
            </Link>
          </div>
          <div className="">
            <div>
              <select
                className="px-3 py-1 text-md border rounded-full"
                onChange={(e) => handleChangeLanguage(e.target.value)}
              >
                <option value="en">
                  English
                  <img src="" />
                </option>
                <option value="ba">Bangla</option>
              </select>
            </div>
          </div>
          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </motion.div>

      {/* mobile Sidebar section */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;

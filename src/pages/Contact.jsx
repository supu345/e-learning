import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[150px] container">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const NoticeBoard = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[150px] container">
        <div className="py-3 text-start">Notice Board</div>
      </div>
      <Footer />
    </div>
  );
};

export default NoticeBoard;

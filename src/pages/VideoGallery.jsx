import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const VideoGallery = () => {
  return (
    <div>
      <Navbar />
      return (
      <div>
        <Navbar />
        <div className="mt-[150px] px-9">
          <div className="py-3 text-center">
            <div className="mt-8 flex justify-center">
              <video controls width="600" className="rounded-lg shadow-lg">
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
                {/* Alternative formats */}
                <source
                  src="https://www.w3schools.com/html/mov_bbb.ogg"
                  type="video/ogg"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <Footer />
      </div>
      );
      <Footer />
    </div>
  );
};

export default VideoGallery;

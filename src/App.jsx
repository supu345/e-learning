import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Management from "./pages/Management";
import MissionVision from "./pages/MissionVision";
import MadrasaFacilities from "./pages/MadrasaFacilities";
import Contact from "./pages/Contact";
import OnlineAdmission from "./pages/OnlineAdmission";
import AdmissionProcedure from "./pages/AdmissionProcedure";
import TuitionFees from "./pages/TuitionFees";
import PhotoGallery from "./pages/PhotoGallery";
import VideoGallery from "./pages/VideoGallery";
import NoticeBoard from "./pages/NoticeBoard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/login" element={<Login />} />;
        <Route path="/register" element={<Register />} />;
        <Route path="/about" element={<About />} />;
        <Route path="/school-facilities" element={<MadrasaFacilities />} />;
        <Route path="/mission-vision" element={<MissionVision />} />;
        <Route path="/management" element={<Management />} />;
        <Route path="/contact" element={<Contact />} />;
        <Route path="/online-admission" element={<OnlineAdmission />} />;
        <Route path="/admission-procedure" element={<AdmissionProcedure />} />;
        <Route path="/tuition-fees" element={<TuitionFees />} />;
        <Route path="/photo-gallery" element={<PhotoGallery />} />;
        <Route path="/video-gallery" element={<VideoGallery />} />;
        <Route path="/notice-board" element={<NoticeBoard />} />;
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;

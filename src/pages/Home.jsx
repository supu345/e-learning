import React from "react";
import Navbar from "../components/Navbar";
import NavbarBanner from "../components/NavbarBanner";
import Hero from "../components/Hero";
import NumberCounter from "../components/NumberCounter";
import WhyChooseUs from "../components/WhyChooseUs";
import Banner from "../components/Banner";
import Img1 from "../assets/photo4.jpg"; // Ensure the file exists at this path
import Img2 from "../assets/photo3.jpg"; // Ensure the file exists at this path
import SubjectCard from "../components/SubjectCard";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const BannerData = {
  image:
    "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Personalized Professional Online Tutor on Your Schedule",
  subtitle:
    "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility.Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
  link: "#",
};

const BannerData2 = {
  image:
    "https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Talented and Qualified Tutors to Serve You for Help",
  subtitle:
    "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used",
  link: "#",
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <NavbarBanner />
      <Hero />
      <NumberCounter />
      <WhyChooseUs />
      <Banner {...BannerData} />
      <Banner {...BannerData2} reverse={true} />
      <SubjectCard />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;

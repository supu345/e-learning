import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { SlideUp } from "../../src/utility/animation";
const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[150px] container">
        <div className="py-3 text-start">
          <motion.p
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView={"visible"}
          >
            <p className=" text-green-600 font-semibold capitalize text-xl">
              Statement of Privacy:
            </p>
          </motion.p>

          <motion.p
            variants={SlideUp(0.7)}
            initial="hidden"
            whileInView={"visible"}
          >
            <p className="py-5 text-start">
              We henceforth referred as (‘We’) is committed to protecting the
              privacy and security of your personal data. The protection of your
              privacy in the processing of your personal data is an important
              concern to which we pay special attention in our business
              processes. We process personal data collected during visits to our
              websites according to the legal provisions valid for the countries
              in which the websites are maintained.
            </p>
            <p className="py-5 text-start">
              This privacy notice describes the information about you that We
              collects through this website, how that information is used,
              maintained, shared, protected and how you can update it. It also
              applies to all personal data received by We from the European
              Economic Area (“EEA”) in any format, including electronic or
              paper. It is effective on the date posted below and applies to our
              use of your information post effective date.
            </p>
          </motion.p>

          <motion.p
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView={"visible"}
          >
            <p className=" text-green-600 font-semibold capitalize text-xl">
              Personal data that we collect:
            </p>
          </motion.p>
          <motion.p
            variants={SlideUp(0.7)}
            initial="hidden"
            whileInView={"visible"}
          >
            <p className="py-5 text-start">
              Personal data refers to data that lets We know the specifics of
              who you are and which may be used to identify, contact or locate
              you (e.g. name, age, gender, mailing address, telephone number and
              e-mail address). We collect your personal data when you provide us
              in scenarios such as in response to a survey, in case you register
              for events, when registering for personalised services, request
              information about product or use our services or request customer
              support. We may ask you to provide your personal data relevant for
              the scenarios such as your name, address, zip code, phone number,
              email address, IP Address, location data, information about your
              device, etc. Not all of the personal data We holds about you, will
              always come directly from you. It may, for example, come from your
              employer or other organizations to which you belong. However, We
              collects personal data about you when you interact with this site
              and/or utilize services offered on this site. For example:
            </p>
          </motion.p>
          <motion.p
            variants={SlideUp(0.7)}
            initial="hidden"
            whileInView={"visible"}
          >
            <ul
              style={{
                listStyleType: "disc",
                marginLeft: "20px",
                marginBottom: "20px",
              }}
            >
              <li className="mb-2">
                If you apply for a job or other staffing opportunity through
                this site, you will be asked to submit your resume and as well
                as other contact information such as your email address, phone
                number and mailing address. We will use this information to
                consider you for the job opening that you specify. We may also
                use this information to contact you regarding other staffing
                opportunities, both opportunities advertised on this site.
              </li>
              <li className="mb-2">
                We may use a third party service provider to assist us with some
                features of our site. Our service provider will receive your
                information on our behalf and will not be permitted to use it
                for any other purpose.
              </li>
              <li className="mb-2">
                We may also ask you for personal data in connection with other
                interactions you have with this website, including when you
                answer a survey and when you report a problem with this site or
                services offered on this site.
              </li>
              <li className="mb-2">
                We collect your personal data if you wish to do business with us
                in the form of dealership / distributorship (through dealer /
                distributor applications)
              </li>
              <li className="mb-2">
                We also collect personal data from third parties such as our
                partners, service providers, and publicly available websites, to
                offer services we think may be of interest and to help us
                maintain data accuracy, provide, and enhance the services.
              </li>
            </ul>
          </motion.p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

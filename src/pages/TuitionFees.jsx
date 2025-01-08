import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { SlideUp } from "../../src/utility/animation";
const TuitionFees = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-10 container mx-auto max-w-screen-xl px-4">
        <div className="py-3">
          <div className="py-3 mt-8">
            <motion.p
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
            >
              <p className="text-green-600 font-semibold capitalize text-2xl md:text-3xl">
                ADMISSION & TUITION FEES
              </p>
            </motion.p>
            <motion.p
              variants={SlideUp(0.7)}
              initial="hidden"
              whileInView={"visible"}
            >
              <p className="py-4 text-sm md:text-base leading-relaxed">
                There is no substitute for paying standard salary and allowance
                for hiring quality/Well Skilled teachers. The budget of a
                teacher in the same class is 500 Taka while the budget of a
                teacher is 5 thousand Taka. We have fixed the nominal Fees by
                doing the Homework with good quality teachers. Because if
                someone with English medium teacher and a good quality Hafez
                keeps private at home, even if it is less, 8/10 thousand Taka
                will have to be counted only for Private. We will do everything
                from A-to-Z including homework but the Fee is only 5/6 thousand
                Taka. The reality is that it would not be wrong to say that
                there is no English medium plus good quality madrasa in this
                Fees. Moreover, considering all aspects of travel, the Fees will
                be spent for the student himself. The authorities will not get
                much benefit from it.
              </p>
            </motion.p>
          </div>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-6 text-xs md:text-sm font-semibold text-center border border-gray-300">
                    Class
                  </th>
                  <th className="py-3 px-6 text-xs md:text-sm font-semibold text-center border border-gray-300">
                    Admission Fee
                  </th>
                  <th className="py-3 px-6 text-xs md:text-sm font-semibold text-center border border-gray-300">
                    Monthly Fee
                  </th>
                  <th className="py-3 px-6 text-xs md:text-sm font-semibold text-center border border-gray-300">
                    For Bed Laundry
                  </th>
                  <th className="py-3 px-6 text-xs md:text-sm font-semibold text-center border border-gray-300">
                    5 Times Food Cost
                  </th>
                  <th className="py-3 px-6 text-xs md:text-sm font-semibold text-center border border-gray-300">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="py-3 px-6 border border-gray-300">
                    Play Group
                  </td>
                  <td className="py-3 px-6 border border-gray-300">10,000/-</td>
                  <td className="py-3 px-6 border border-gray-300">5,500/-</td>
                  <td className="py-3 px-6 border border-gray-300">2,000/-</td>
                  <td className="py-3 px-6 border border-gray-300">5,500/-</td>
                  <td className="py-3 px-6 border border-gray-300">13,000/-</td>
                </tr>
                <tr className="text-center">
                  <td className="py-3 px-6 border border-gray-300">Nursery</td>
                  <td className="py-3 px-6 border border-gray-300">10,000/-</td>
                  <td className="py-3 px-6 border border-gray-300">5,500/-</td>
                  <td className="py-3 px-6 border border-gray-300">2,000/-</td>
                  <td className="py-3 px-6 border border-gray-300">5,500/-</td>
                  <td className="py-3 px-6 border border-gray-300">13,000/-</td>
                </tr>
                <tr className="text-center">
                  <td className="py-3 px-6 border border-gray-300">K.G.</td>
                  <td className="py-3 px-6 border border-gray-300">10,000/-</td>
                  <td className="py-3 px-6 border border-gray-300">5,500/-</td>
                  <td className="py-3 px-6 border border-gray-300">2,000/-</td>
                  <td className="py-3 px-6 border border-gray-300">5,500/-</td>
                  <td className="py-3 px-6 border border-gray-300">13,000/-</td>
                </tr>
                <tr className="text-center">
                  <td className="py-3 px-6 border border-gray-300">Class 01</td>
                  <td className="py-3 px-6 border border-gray-300">10,000/-</td>
                  <td className="py-3 px-6 border border-gray-300">5,500/-</td>
                  <td className="py-3 px-6 border border-gray-300">2,000/-</td>
                  <td className="py-3 px-6 border border-gray-300">5,500/-</td>
                  <td className="py-3 px-6 border border-gray-300">13,000/-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TuitionFees;

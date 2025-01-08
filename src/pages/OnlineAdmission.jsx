import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const OnlineAdmission = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[150px] container mx-auto px-4">
        <div className="py-3">
          <div className="py-3 mt-8">
            <div className="flex flex-col lg:flex-row lg:gap-6">
              {/* Left Side */}
              <div className="w-full lg:w-3/5">
                <form className="space-y-4 bg-white shadow-md p-6 rounded">
                  {/* Academic Year / Session and Application Number */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Academic Year/Session:{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value="2025"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Application Number:{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value="2025001"
                        className="mt-1 block w-full border border-yellow-300 rounded-md p-2 bg-yellow-100"
                        disabled
                      />
                    </div>
                  </div>

                  {/* Select Institute */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Select Institute: <span className="text-red-500">*</span>
                    </label>
                    <select className="mt-1 block w-full border border-cyan-300 rounded-md p-2">
                      <option>Rawhatul Uloom International Madrasa</option>
                    </select>
                  </div>

                  {/* Select Course */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Select Course: <span className="text-red-500">*</span>
                    </label>
                    <select className="mt-1 block w-full border border-yellow-300 rounded-md p-2">
                      <option>Select Course</option>
                    </select>
                  </div>

                  {/* Student Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Student Name: <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>

                  {/* Mobile Number and Email Address */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Mobile No: <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Email Address:
                      </label>
                      <input
                        type="email"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                      />
                    </div>
                  </div>

                  {/* Date of Birth and Blood Group */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Date of Birth:
                      </label>
                      <input
                        type="date"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Blood Group:
                      </label>
                      <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                        <option>Unknown</option>
                      </select>
                    </div>
                  </div>

                  {/* Religion and Gender */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Religion: <span className="text-red-500">*</span>
                      </label>
                      <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                        <option>Select</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Gender: <span className="text-red-500">*</span>
                      </label>
                      <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                        <option>Select Gender</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>

              {/* Right Side */}
              <div className="w-full lg:w-2/5 mt-6 lg:mt-0">
                <div className="container mx-auto p-6 bg-gray-50 shadow-md rounded-md">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Student Photo
                      </label>
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://via.placeholder.com/60"
                          alt="Student Icon"
                          className="w-16 h-16 rounded-full shadow-md"
                        />
                        <input
                          type="file"
                          className="block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border file:border-gray-300 file:text-sm file:font-semibold file:bg-gray-100 file:hover:bg-gray-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="applicationDate"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Application Date:
                      </label>
                      <input
                        type="text"
                        id="applicationDate"
                        value="08-01-2025"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        DECLARATION:
                      </label>
                      <div className="p-4 bg-yellow-100 border border-yellow-300 rounded-md">
                        <div className="flex items-start space-x-2">
                          <input
                            type="checkbox"
                            id="declaration"
                            className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor="declaration"
                            className="text-sm text-gray-700"
                          >
                            I declare that the information given above is
                            correct. I hereby agree that I will not cause any
                            type of inconvenience to arise which may stem from
                            any kind of wrong information having been provided.
                            As such I will respect any decision taken by the
                            school authority.
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700 focus:ring focus:ring-red-300"
                      >
                        Submit Application
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OnlineAdmission;

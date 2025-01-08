import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[150px] px-4 sm:px-9">
        <div className="bg-slate-200 mt-4">
          <div className="w-full justify-center items-center p-6 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[80%] lg:w-[60%] mx-auto bg-white rounded-md">
              {/* Form Section */}
              <div className="px-4 sm:px-8 py-8">
                <h2 className="text-center w-full text-lg sm:text-xl text-slate-600 font-bold">
                  Register
                </h2>
                <div>
                  <form className="text-slate-600">
                    <div className="flex flex-col gap-1 mb-2">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                        id="name"
                        name="name"
                        placeholder="name"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1 mb-2">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                        id="email"
                        name="email"
                        placeholder="email"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1 mb-4">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                        id="password"
                        name="password"
                        placeholder="password"
                        required
                      />
                    </div>
                    <button className="px-8 w-full py-2 bg-purple-500 shadow-lg hover:shadow-indigo-500/30 text-white rounded-md">
                      Register
                    </button>
                  </form>
                  <div className="flex justify-center items-center py-2">
                    <div className="h-[1px] bg-slate-300 w-[95%]"></div>
                    <span className="px-3 text-slate-600">or</span>
                    <div className="h-[1px] bg-slate-300 w-[95%]"></div>
                  </div>
                </div>
                <div className="text-center text-slate-600 pt-1">
                  <p>
                    Already have an account?{" "}
                    <Link className="text-blue-500" to="/login">
                      Login
                    </Link>
                  </p>
                </div>
                <div className="text-center text-slate-600 pt-1">
                  <p>
                    {" "}
                    <a
                      target="_blank"
                      className="text-blue-500"
                      href="http://localhost:3001/login"
                    >
                      Login
                    </a>{" "}
                    as a seller
                  </p>
                </div>
              </div>
              {/* Image Section */}
              <div className="w-full h-full py-4 pr-0 md:pr-4">
                <img
                  className="w-full h-auto md:h-[95%] object-cover rounded-b-md md:rounded-b-none md:rounded-r-md"
                  src="https://images.pexels.com/photos/2104856/pexels-photo-2104856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="photo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;

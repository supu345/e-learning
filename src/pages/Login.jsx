import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Img from "../../src/assets/photo8.jpg";
const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[150px] px-4 sm:px-6 lg:px-9">
        <div className="py-3 text-center">
          <div className="bg-slate-200 mt-4">
            <div className="w-full flex justify-center items-center p-6 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full sm:w-[90%] lg:w-[60%] bg-white rounded-md shadow-lg">
                {/* Login Form Section */}
                <div className="px-6 sm:px-8 py-8">
                  <h2 className="text-center w-full text-lg sm:text-xl text-slate-600 font-bold">
                    Login
                  </h2>
                  <div>
                    <form className="text-slate-600">
                      <div className="flex flex-col gap-1 mb-2 text-start">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                          id="email"
                          name="email"
                          placeholder="email"
                        />
                      </div>
                      <div className="flex flex-col gap-1 mb-4 text-start">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                          id="password"
                          name="password"
                          placeholder="password"
                        />
                      </div>
                      <button className="px-6 w-full py-2 bg-purple-500 shadow-lg hover:shadow-indigo-500/30 text-white rounded-md">
                        Login
                      </button>
                    </form>
                    <div className="flex justify-center items-center py-2">
                      <div className="h-[1px] bg-slate-300 w-[40%]"></div>
                      <span className="px-3 text-slate-600">or</span>
                      <div className="h-[1px] bg-slate-300 w-[40%]"></div>
                    </div>
                  </div>
                  <div className="text-center text-slate-600 pt-1">
                    <p>
                      You have no account?{" "}
                      <Link className="text-blue-500" to="/register">
                        Register
                      </Link>
                    </p>
                  </div>
                  <div className="text-center text-slate-600 pt-1">
                    <p>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                        href="http://localhost:3001/register"
                      >
                        Register
                      </a>{" "}
                      seller account
                    </p>
                  </div>
                </div>
                {/* Image Section */}
                <div className="w-full h-full py-4 pr-0 lg:pr-4">
                  <img
                    className="w-full h-[250px] sm:h-[300px] lg:h-full object-cover rounded-md"
                    src={Img}
                    alt="Login Illustration"
                  />
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

export default Login;

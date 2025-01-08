import React from "react";

const ContactForm = () => {
  return (
    <div className="dark:bg-black dark:text-white px-4 md:px-8 lg:px-16 py-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Form Section */}
        <div className="w-full md:w-1/2 bg-slate-100 rounded-xl dark:bg-black dark:text-white p-6 md:p-10">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Contact Us
          </p>
          <p className="text-sm md:text-base lg:text-lg mb-8">
            Hello! Do you have any questions or suggestions about this site, or
            just want to say Hi? Send a message using the below form. I will get
            back to you as soon as possible.
          </p>
          <form>
            {/* Full Name */}
            <div className="mb-6">
              <input
                type="text"
                id="fullname"
                className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Full name"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
              />
            </div>

            {/* Subject */}
            <div className="mb-6">
              <input
                type="text"
                id="subject"
                className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Subject"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <textarea
                id="message"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Message"
                rows="5"
              />
            </div>

            {/* Submit Button */}
            <button
              type="button"
              className="w-full bg-green-500 text-white rounded-full px-5 py-3 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
            alt="Contact Us"
            className="h-64 md:h-[730px] w-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

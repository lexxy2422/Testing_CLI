import React from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col items-center justify-center px-4 py-12 md:flex-row md:px-12 lg:px-24 bg-gray-50 bg-gradient-to-t from-white to-yellow-50">
      <div className="flex flex-col flex-1 px-6 mb-14">
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 md:text-3xl">Get in Touch</h2>
        <p className="mb-6 text-gray-600">We are committed to processing the information to contact you and discuss your project.</p>
        <div className="space-y-4 text-gray-600">
          <div className="flex items-center">
            <FiMail className="w-6 h-6 mr-2 text-yellow-500" />
            <span>pauladebayo77@gmail.com</span>
          </div>
          <div className="flex items-center">
            <FiMapPin className="w-6 h-6 mr-2 text-yellow-500" />
            <span>2527 Hemingway Lane Atlanta Ga 30076</span>
          </div>
          <div className="flex items-center">
            <FiPhone className="w-6 h-6 mr-2 text-yellow-500" />
            <span>470-805-7635</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-11/12 max-w-screen-sm p-6 bg-white rounded-lg shadow-lg">
        <form action="#" method="POST" className="w-11/12 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name
              <span className="text-red-500">*</span>
            </label>
            <input 
              type="text"
              id="name"
              name="name"
              className="block w-full px-4 py-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="website">Website</label>
            <input
              type="url"
              id="website"
              name="website"
              placeholder="Your website (Optional)"
              className="block w-full px-4 py-2 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-500" placeholder="Your message"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
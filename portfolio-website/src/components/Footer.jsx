import React from "react"

const Footer = () => {
  return (
    <div className="flex flex-col items-center mt-12 bg-white">
      <div className="container flex flex-col justify-between px-5 md:flex-row">
        <div className="mb-8 mr-6 text-center md:mb-0 md:w-1/4 md:text-start">
          <h2 className="font-semibold text-yellow-500 text_3xl">Adebayo Coding</h2>
          <p className="mt-1 text-gray-500 md:pr-5">Lorem, ipsum dolor sit amet consectetur adipisiciing elit.</p>
        </div>
        <div className="flex justify-between md:w-3/4">
          <div className="space-y-4">
            <h3 className="font-medium text-gray-700">EXPLORE</h3>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#">Support</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-gray-700">LEGAL</h3>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
            <h3 className="font-medium text-gray-700">SOCIAL</h3>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Linkedin</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-2 mt-8 bg-yellow-500"></div>
    </div>
  );
};


export default Footer;

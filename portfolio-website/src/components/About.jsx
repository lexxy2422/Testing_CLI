import React from 'react'
import aboutImg from "../assets/aboutImg.png"
import  cv from "../assets/cv.pdf"
import  {FaRegHandshake} from"react-icons/fa"
import {MdSupportAgent} from "react-icons/md"
import { BsDownload } from "react-icons/bs"
import { BsDownload } from 'react';
import { CV } from '..';
const About = () => {
  return (
    <div id="about-me" className="py-16 bg-gray-50">
      <div className="container flex flex-col items-center justify-between px-6 mx-auto lg:px-14 md:flex-row ">
        <div className="mb-8 ml-0 w-52 md:w-72 md:mb-0 md:ml-30">
          <img 
            src={aboutImg} 
            alt="About Me"
            className="object-cover w-full h-auto" 
          />
        </div>
        {/* Right section */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-yellow-500 uppercase">A Bit</h3>
          <h2 className="mb-6 text-4xl font-bold text-gray-800 md:text-6xl">About Me</h2>
          <p className="mb-6 text-gray-600">
            {/* ... */}
          </p>
          <div className="flex flex-wrap mb-6">
            {/* ... */}
          </div>
          <div className="flex items-center">
            <button className="px-8 py-3 mr-4 bg-yellow-500 rounded-lg hover:bg-yellow-400">Hire me</button>
            <a className="flex items-center font-semibold text-yellow-500" href={CV} download="CV.pdf">
              Download CV
              <BsDownload className="ml-2 text-lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default About;

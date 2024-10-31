import React from 'react'
import Service1 from "../assets/Service1.png"
import Service2 from "../assets/Service2.png"
import Service3 from "../assets/Service3.png"
import { FaArrowRight } from 'react-icons/fa'

const Services = () => {
  return (
    <div id="services"className="by-white py-16 px-8">
      <div className="container mx-auto px-6 lg:px-24 text-center">
        <div className="mb-12 ">
        <h3 className="text-yellow-500 font-semibold text-lg uppercase mb-2">
            Services</h3>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
            check my Services</h2>
        </div>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-gray-50 rounded-lg shadow-lg p-6">
          <img src={Service1} alt="service1" className="w-full h-48 object-cover rounded-lg mb-4"/>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2"> 
            Landing page Design
            </h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Sed vel lectus vel tellus vestibulum elementum.
            </p>
        </div>
        <div className="bg-gray-50 rounded-lg shadow-lg p-6">
        <img src={Service2} 
        alt="service1" className="w-full h-48 object-cover rounded-lg mb-4"/>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2"> 
            Mobile App Design
            </h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Sed vel lectus vel tellus vestibulum elementum.
            </p> 
        </div>
        <div className="bg-gray-50 rounded-lg shadow-lg p-6" >
        <img src={Service3} 
        alt="service1" className="w-full h-48 object-cover rounded-lg mb-4"/>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2"> 
            Branding
            </h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Sed vel lectus vel tellus vestibulum elementum.
            </p> 
        </div>
       </div>
       <div className="mt-8 text-right ">
        <a className="flex items-center justify-end text-yellow-500 font-semibold hover:text-yellow-400">
            Explore All Services<FaArrowRight 
            className="ml-2"/>
        </a>
       </div>
    </div>
  );
};

export default Services;

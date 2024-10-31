import React from 'react'
import aboutImg from "../assets/aboutImg.png"
import  cv from "../assets/cv.pdf"
import  {FaRegHandshake, FaRegFolderOpen} from"react-icons/fa"
import {MdSupportAgent} from "react-icons/md"
import { BsDownload } from "react-icons/bs"
import { BsDownload } from 'react';
import { CV } from '..';
const About = () => {
  return (
    <div id="about Me" className="py-16 bg-gray-50">
    <div className="container mx-auto px-6 lg:px-14 flex flex-col md:flex-row items-center justify-between ">
     <div className="w-52 md:w-72 mb-8 md:mb-0 ml-0 md:ml-30">
        <img 
        src={aboutImg} 
        alt="Sbout Me"
        className="w-full h-auto object-cover" />
        </div> 
     {/*Right section*/}
        <div>
       <h3 className="text-yellow-500 text font-semibold text-lg uppercase mb-4">A Bit</h3>
       <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">About Me</h2>
       <p className="text-gray-600 mb-6">
         I'am a passionate software engineer ,with a keen eye for detail and a strong foundation in cyber security , Engeineering , Devop , pen-tester , Networking ,JavaScript
         and React. I have recently graduated from a prestigious university with a degree in physical & Health .
          I have worked on various projects, from small scale web applications to large-scale enterprise applications. 
          My goal is to create meaningful and impactful products that help people live better.
       </p>
       <div className="flex flex-wrap mb-6">
        <div className="flex items-center w-1/2
        mb-4">
            <FaRegHandshake className="text-gray-500 text-5xl mr-4"/>
           <div>
            <h4 className="text-gray-700 font-semibold">
                8 years+</h4>
            <p className="text-gray-700">Experience

            </p>
            </div> 
            </div>
            <div className="flex flex-wrap mb-6">
        <div className="flex items-center w-1/2
        mb-4">
            <MdSupportAgent className="text-yellow-500 text-5xl mr-4"/>
           <div>
            <h4 className="text-gray-700 font-semibold">
                24/7</h4> 
            <p 
            className="text-gray-700">Customa
            support</p>
            </div> 
            </div>
            </div>
            <div className="flex items-center">
                <botten className="bg-yellow-500 px-8 
                py-3 rounded-lg mr-4 hover:bg-yellow-400">Hire me</botten>
                <a className="flex items-center text-yellow-500 font-semibold"href=
                {CV} download= "CV.pdf">
                    Download CV<BsDownload 
                    className="ml-2 text-lg"/>
                </a>
            </div>
            </div>
         </div>
        </div>
        );
 };

 export default About;

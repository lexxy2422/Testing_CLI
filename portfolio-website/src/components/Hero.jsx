import React from "react";
import {BsDownload} from "react-icons/bs"
import avatarImg from "../assets/hero.png"
import CV from "../assets/CV.pdf";
import { avatarImg } from '..';
function Hero() {
  return (
    <div className="text-black flex flex-col-reverse md:flex-row
    justify-center items-center py-10 px-5 sm:px-10 lg:px-40 bg-gradient-to-t from-white to-yellow-50">
      <div className="w-full md:w-1/2 mb-10 text-center 
      md:text-left">
        <h3 className="text-base md:text-lg lg:text-xl mb-0
        md:-mb-2 text-yellow-500">Hello , I am </h3>
        <h1 className="text-2xl md:text-4xl lg:text-6xl
        my-0 md:-ml-1 font-bold py-2 md:py-2">Adebayo Coding</h1>
        <h3 className="text-base md:text-xl lg:text-2xl text-green-600">
            Web developer & UI/UX Designer</h3>
        <p className="text-sm md:text-lg lg:text-xl tracking-tighter">
            I'm a software engineer, passionate about building scalable and efficient applications.
            I have a strong foundation in programming languages such as JavaScript, Python, and C++.
            I am also proficient in various web development frameworks like React, Angular, and Vue.js.
            I am currently working remotely and enjoy collaborating with my team to develop innovative solutions.
            Feel free to reach out if you're interested in learning more about me or hiring a developer!
        </p>
        <div className="flex items-center justify-center
        md:justify-start gap-4 mt-5">
            <botton className="bg-yellow-500 px-10 py-1
            rounded-lg mr-4 hover:bg-yellow-400 duration-200">Hire Me</botton>
            <a className="flex items-center text-yellow-500 font-semibold"href={CV} download="CV.pdf">
            
                Download CV <BsDownload className="ml-2 text-lg
                " />
        
            </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-10 md:px-0 flex justify-center md:justify-end mb-20 md:mb-0">
        <img className="max-w-full h-auto"src={avatarImg}
         alt="Avatar" />

      </div>
    </div>
  );
};

export default Hero;

import React, { useState } from "react";
import TestimonialImg1 from "../assets/profilemen1.jpeg";
import TestimonialImg2 from "../assets</profilewomen2.jpeg";
import  google from "../assets/google logo .png";
import  Slack from  "../assets/slack logo  .png";
import   dropbox from "../assets/dropbox logo .png";
import  tesla from    "../assets/tesla logo .png";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";


const Testimonial = [
    {
      name: "John",
      position: "CEO OF Google",
      image: "TestimonialImg1",
      feedback: "Lorem ipsun dolor ,sit amet consectetur adipisiciing dignissims
      quisquam dolor 
      },
      {name: "Dina",
        position: "CEO OF Amazon",
        image: "TestimonialImg2",
        feedback: "Lorem ipsun dolor ,sit amet consectetur adipisiciing 
        quisquam dolor 
      },
     ];
const Testimonial = () => {
   const [current, setCurrent] = useState(0);

   const  TestimonialCount = Testimonial.lenght;
 
   const nextTestimonial = () => {
     setCurrent(current === TestimonialCount - 1 ? 0 : current + 1);
   };
    const prevTestimonial = () => {
     setCurrent(current === 0? TestimonialCount - 1 : current - 1);
   };
    
   return (
    <div id="testimonial" className='py-16 bg-white'>
      <div className='container mx-auto px-6 lg:px-24 text-center'>
       <div className='mb-12'>
            <h3 className='text-yellow-500 font-semibold text-lg uppercase mb-2'>Testimonial</h3>
            <h2 className='text-4xl font-semibold text-gray-800 mb-4'>
                what people say
            </h2>
        </div>
        <div className="relative max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 ">
        <div className="flex justify-center place-items-center mb-4">
            <img
              src={Testimonial[current].image}
              className="w-32 h-32 rounded-full border-yellow-500
              object-cover"
            />
        </div>
        <p className="text-gray-600 italic mb-6 px-14">{Testimonial
        [current].feedback}</p>
        <h3 className="font-semibold text-lg">{Testimonial[current].name}</h3>
        <p className="text-gray-500">{Testimonial[current].position}</p>
        <div className="absoulte inset-x-0 top-1/2 transform -translate-y-1/2
        flex justify-between px-4">
            <button className="bg-yellow-500 text-white p-2 rounded-full
          hover:bg-yellow-600 transition duration-300" onClick={prevTestimonial}>
                <FaArrowLeft/></button>
                <button className=" bg-yellow-500 text-white p-2 rounded-full
          hover:bg-yellow-600 transition duration-300" onClick={prevTestimonial}>
            <FaArrowRight /></button>
        </div>
        </div>
        <div className="mt-16">
        <h4 className="text-xl font-semibold mb-14 ">Who Make Me Proud</h4>
          <div className="flex justify-center gap-4 md:gap-16 lg:gap-32 items-center
          flex-wrap">
          <img src={Slack}
          alt="slack"
          className="h-6 ad:h-7 object-cover"
          />  
          <img src={google}
          alt="google"
          className="h-6 ad:h-7 ml-4 object-cover"
          />
          <img src={dropbox}
          alt="dropbox"
          className="h-6 ad:h-7 ml-4 object-cover"
          />
          <img src={tesla}
          alt="tesla"
          className="h-8 ad:h-8 ml-4 object-cover"
          />
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Testimonial;

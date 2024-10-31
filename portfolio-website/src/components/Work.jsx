import React from "react";
import Work1 from "../assets/Work1.png";
import Work2 from "../assets/Work2.png";
import Work3 from "../assets/Work3.png";

const Work = () => {
    const caseStudies = [
  { 
    id: 1, 
    title: "Bakery Landing Page Design", 
    description:
    "where an unknown printer took a gallery of type and scrambled it 
     to make a type specimen book .  it has survived not only five centuries
     but also the leap into electronic typesetting, remaining essentially unchanged.",

    workImage: Work1,
  
    },
    {
     id: 2,
     title: "Shoe store Ecommerce Landing Page", 
     description: 
     "it has survived not onlyfive centuries, but also the leap into electronic 
     electronic typesetting,remaining essentially unchanged.", 

     .",
      workImage: Work2,
    },
    { id: 3, 
      title: "ClearMix Landin Page",
     description: 
     "it has survived not only five centuries, but also the leap into 
     electronic typesetting, remaining essentially unchanged.",
     
      workImage: work3,


    },
   ]; 
  return (
    <div id="work"className="container mx-auto px-4 py-12">
      <h3 className="text-yellow-500 font-semibold text-center uppercase mb-2">
        Work
        </h3>
      <h2 className="text-4xl font-bold text-center 
      mb-12">my Case Studies</h2>
        {caseStudies.map((study, index) => (
         <div 
         key={study.id}className={`flex flex-col lg:flex-row 
         items-center justify-between mb-16 lg:mb-24 $
         {index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
          <div className="w-full lg:w-1/3 p-4">
            <img src={study.workImage}  
            className="w-full h-full object-cover rounded-lg shadow-lg" />
          </div>
         <div className="w-full lg:w-1/2 p-4">
          <div className="flex items-center mb-4">
            <span className="text-3xl font-bold text-yellow-500 mr-2">{'0${index + 1}'}</span>
            <h3 className="text-2xl font-bold">{study.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{study.description}
            </p> 
            <botton className="border-spacing-2 border-yellow-500
            text-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-white">Details</botton> 
         </div>
         </div>
        ))}
    </div>
  );
};

export default Work;
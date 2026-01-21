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
     but also the leap into electro{
       id: 2,
       title: "Shoe store Ecommerce Landing Page", 
       description: 
       "it has survived not only five centuries, but also the leap into electronic electronic typesetting, remaining essentially unchanged.",
       workImage: Work2,
     },import React from "react";
     import Work1 from "../assets/Work1.png";
     import Work2 from "../assets/Work2.png";
     import Work3 from "../assets/Work3.png";
     
     const Work = () => {
       const caseStudies = [
         { 
           id: 1, 
           title: "Bakery Landing Page Design", 
           description:
           "where an unknown printer took a gallery of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
           workImage: Work1,
         },
         {
           id: 2,
           title: "Shoe store Ecommerce Landing Page", 
           description: 
           "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
           workImage: Work2,
         },
         {
           id: 3, 
           title: "Another project", 
           description: 
           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lectus vel tellus vestibulum elementum.",
           workImage: Work3,
         },
       ];
     
       // ... rest of the code ...
     };
     
     export default Work;nic typesetting, remaining essentially unchanged.",

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
    <div id="work"className="container px-4 py-12 mx-auto">
      <h3 className="mb-2 font-semibold text-center text-yellow-500 uppercase">
        Work
        </h3>
      <h2 className="mb-12 text-4xl font-bold text-center">my Case Studies</h2>
        {caseStudies.map((study, index) => (
         <div 
         key={study.id}className={`flex flex-col lg:flex-row 
         items-center justify-between mb-16 lg:mb-24 $
         {index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
          <div className="w-full p-4 lg:w-1/3">
            <img src={study.workImage}  
            className="object-cover w-full h-full rounded-lg shadow-lg" />
          </div>
         <div className="w-full p-4 lg:w-1/2">
          <div className="flex items-center mb-4">
            <span className="mr-2 text-3xl font-bold text-yellow-500">{'0${index + 1}'}</span>
            <h3 className="text-2xl font-bold">{study.title}</h3>
            </div>
            <p className="mb-4 text-gray-600">{study.description}
            </p> 
            <botton className="px-4 py-2 text-yellow-500 border-yellow-500 rounded-full border-spacing-2 hover:bg-yellow-500 hover:text-white">Details</botton> 
         </div>
         </div>
        ))}
    </div>
  );
};

export default Work;
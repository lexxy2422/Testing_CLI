import React from "react"

const Footer = () => {
  return (
    <div className="bg-white mt-12 flex flex-col items-center">
     <div className="container flex flex-col md:flex-row justify-between px-5" >
     <div className="mb-8 md:mb-0 md:w-1/4 mr-6 text-center md:text-start">
    <h2 className="text_3xl font-semibold text-yellow-500">Adebayo Coding</h2>
    <p className="mt-1 text-gray-500 md:pr-5">Lorem, ipsum dolor sit amet consectetur adipisiciing elit.</p>
     </div>  
     <div className="flex justify-between md:w-3/4"> 
     <div className="space-y-4">
     <h3 className="font-medium text-gray-700">EXPLORE</h3>
     <ul className="text-gray-500 space-y-2">
        <li><a href="#">Support</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Blog</a></li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="font-medium text-gray-700">LEGAL</h3>
        <ul className="text-gray-500 space-y-2">
        <li><a href="#">Terms of Use</a></li>
        
        <li><a href="#">Privacy Policy</a></li>
        </ul>
        <h3 className="font-medium text-gray-700">SOCIAL</h3>
        <ul className="text-gray-500 space-y-2">
        <li><a href="#">Twitter</a>
        </li>
        <li>
            <a href="#">Linkedin</a>
        </li>
         <li>
            <a href="#">Instagram</a>
         </li>
        </ul>
       </div> 
      </div>
     </div>
     <div className="mt-8 bg-yellow-500 h-2 w-full">

     </div>
     </div>
  );
};

export default Footer;

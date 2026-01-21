import CV from "../assets/cv.pdf";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-scroll";
import React, { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const items = [
    { id: 1, text: "About", to: "about" },
    { id: 2, text: `services`, to: "services" },
    { id: 3, text: "work", to: "work" },
    { id: 4, text: "Testimonials", to: "Testimonial" },
    { id: 5, text: "Contact", to: "contact" },
  ];

  return (
    <div className="w-full text-black bg-yellow-50">
      <div className="container items-center justify-between hidden p-4 mx-auto md:flex">
        <div className="flex items-center gap-1 text-xl font-bold md:text-2xl">
          <span className="text-black">Adebayo</span>
          <span className="text-yellow-500"> Coding</span>
        </div>
        <div className="items-center hidden space-x-6 text-lg list-none md:flex">
          {items.map(({ id, to, text }) => (
            <li key={id} className="duration-200 cursor-pointer hover:text-yellow-500">
              <Link to={to} smooth={true} duration={500}>
                {text}
              </Link>
            </li>
          ))}
        </div>
        <a
          href={CV}
          download="CV.pdf"
          className="px-4 py-2 text-lg text-black bg-yellow-500 rounded hover:bg-yellow-400"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};
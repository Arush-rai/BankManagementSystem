import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineTextsms } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 md:p-10">
      <div>
        <div className="flex justify-center mb-10 gap-8 text-3xl md:text-6xl">
          <IoMailOutline />
          <MdOutlineTextsms />
          <FaWhatsapp />
        </div>
        <h1 className="text-center block text-sm md:text-base mt-4 md:mt-0">
          © 2024 My Bank. All rights reserved.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;

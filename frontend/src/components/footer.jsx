import React from 'react'
import { IoMailOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineTextsms } from "react-icons/md";
const Footer = () => {
  return (
    <div className=' flex justify-center text-3xl gap-16 bg-gray-800 text-white p-10  '>
    <div className=''>
      <div className='flex justify-center text-6xl gap-16 bg-gray-800 text-white p-10 ' >
      <IoMailOutline />
      <MdOutlineTextsms />
      <FaWhatsapp />
      
    </div>
    <h1>© 2024 My Bank. All rights reserved.</h1>
    </div>
    
    </div>
  )
}

export default Footer

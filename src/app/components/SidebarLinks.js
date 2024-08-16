import React from 'react'
import { TbMessage2 } from "react-icons/tb";
import { MdOutlineLocalPhone } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";

const SidebarLinks = () => {
  return (
    <div className='flex gap-2'>

         <div className='bg-gray-700 p-2 rounded-full cursor-pointer'>
         <TbMessage2/>
        </div>
         <div className='bg-gray-700 p-2 rounded-full cursor-pointer'>
         <MdOutlineLocalPhone/>
        </div>
         <div className='bg-gray-700 p-2 rounded-full cursor-pointer'>
         <SiAboutdotme/>
        </div>
         <div className='bg-gray-700 p-2 rounded-full cursor-pointer'>
         <FaLocationDot/>
        </div>
        
    </div>
  )
}

export default SidebarLinks
"use client"
import React, { useEffect, useState } from 'react'
import Sidebar from './Siderbar'
import { FaBarsStaggered } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

const SideMenubar = () => {

  const [open, setOpen] = useState(false)

  const showSidebar=()=>{
    setOpen(!open)
    console.log("clicked");
  }

  return (
    <>
    <Sidebar open={open}/>
    <div className='p-3 h-12 w-12 cursor-pointer absolute top-2 right-3 flex flex-col items-center justify-evenly bg-white 
    backdrop-blur-sm bg-opacity-25 md:hidden' onClick={showSidebar}>
    
   {open?<ImCross/>:<FaBarsStaggered/>}

    </div>
    </>
  )
}

export default SideMenubar
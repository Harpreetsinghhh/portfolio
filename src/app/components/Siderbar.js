import Image from "next/image";
import React from "react";
import SidebarLinks from "./SidebarLinks";


export default function Sidebar(props)
{
    return(
        <>
            <div id="sidebar" className={`bg-black text-white  flex flex-col items-center justify-around absolute left-0 bottom-0 w-8/12 h-screen ${props.open?'':'hidden'}  md:hidden`} >

            <div className="flex flex-col items-center">
            <Image
                src="/images/profile.png"
                width={200}
                height={200}
            />
             <h3 className='text-2xl  text-white text-center'><span className="font-bold">Harpreet</span> Singh</h3>
             <h6 className="text-lg my-3 text-slate-400 text-center">Web Developer</h6>

            <SidebarLinks/>

            </div>


            <div className="bg-slate-600 p-2 rounded-full my-2 text-center w-11/12">
                Download CV
            </div>

            </div>

        </>
    )
}
"use client"
import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
const ExperienceBox = (props) => {

  Aos.init();

  return (

    <>
    <div className="experience-box text-white flex gap-4 my-3 " data-aos="slide-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
    
        <div className="experience-box_left flex flex-col items-center">
            <div className='small_ring h-4 w-1 p-3 border rounded-xl flex justify-center items-center'>
                <div className='h-2 w-2 p-2 border rounded-full bg-orange-400'></div>
            </div>
            <div className='experience-line h-28 w-0.5 bg-white'></div>
        </div>

        <div className="experience-box_right flex flex-col gap-1">
            <h4>{props.head}</h4>
            <p>{props.subhead}</p>
            <p className='text-slate-400'>{props.pcontent}</p>
        </div>
        
    </div>
    </>
  )
}

export default ExperienceBox
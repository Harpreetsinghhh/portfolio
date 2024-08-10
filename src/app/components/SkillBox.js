import React from 'react'

const SkillBox = (props) => {
  return (
    <>
    <div className={`skill-box p-2 border-2 ${props.border} rounded-full bg-blue-400 bg-opacity-20 flex flex-col items-center justify-center w-32 my-1 h-16 sm:w-40 ` }  data-aos="flip-left" data-aos-delay="100">
        <p className='text-lg'>{props.percent}</p>
        <p className={` ${props.textcolor} text-sm`}>{props.skill}</p>
    </div>
    </>
  )
}

export default SkillBox
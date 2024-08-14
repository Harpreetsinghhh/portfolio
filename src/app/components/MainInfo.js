import React from 'react'
import Button from './Button'
import SideMenubar from './SideMenubar'
const MainInfo = () => {
  return (
    <>
        <div className='main_info  flex justify-center flex-col items-center my-6'>
            <SideMenubar/>


            <h3 className='text-4xl  text-white'><span className="font-bold">Harpreet</span> Singh</h3>
            <h6 className="text-lg my-3 text-orange-400">Web Developer</h6>
            <p className='text-center text-slate-200'>
                I am a web developer with a passion for creating user-friendly and visually appealing websites.
            </p>
            <div className='main_info_btns my-3'>
                <Button bgcolor="bg-green-400 mr-2" name="View Work" />
                <Button bgcolor="bg-yellow-400" name="Contact Me" />
            </div>
        </div>
    </>
  )
}

export default MainInfo
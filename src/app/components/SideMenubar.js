import React, { useEffect } from 'react'


const SideMenubar = () => {

  const [open, setOpen] = React.useState(false)

  const showSidebar=()=>{
    setOpen(!open)
  }

  return (
    <div className='p-3 h-12 w-12 absolute top-2 right-3 flex flex-col justify-evenly bg-white backdrop-blur-sm bg-opacity-25' onClick={showSidebar}>
        <div className='h-0.5 w-full bg-white'></div>
        <div className='h-0.5 w-full bg-white'></div>
        <div className='h-0.5 w-full bg-white'></div>
    </div>
  )
}

export default SideMenubar
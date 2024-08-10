import React from 'react'
import SectionHeadComponent from './SectionHeadComponent'
import Contactform from './Contactform'

const Contact = () => {
  return (
    <>
    <div className=" text-white">
        <SectionHeadComponent sectionclass="contact_head" sectionname="Get In Touch"/>
        <h4 className='my-1 text-md'>TAKE A COFFEE & CHAT WITH ME</h4>
        <Contactform/>
    </div>
    </>
  )
}

export default Contact
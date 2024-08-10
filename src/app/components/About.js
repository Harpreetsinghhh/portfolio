import React from 'react'
import SectionHeadComponent from './SectionHeadComponent'
import AboutDetailSingle from './AboutDetailSingle'

const About = () => {
  return (
    <>
    <section className='text-white'>
        <SectionHeadComponent sectionname="About Me" sectionclass="about_head"/>

        <p className='text-slate-400'>
        Hi, my name is Harpreet Singh and I began using WordPress when first began. I've spent most of my waking hours for the last ten years designing, programming and operating WordPress sites go beyond with exclusive designer. Apart from this I love to travel, mentor designers, review design portfolios & read books on everything related to design. I have also given design talks in various educational institutions. So I love creating creative content, and you can find most of my works here.
        </p>
        <div className='about_detailsub my-3 flex flex-col items-center'>
       <AboutDetailSingle head="Name" name="Harpreet Singh" />
       <AboutDetailSingle head="Nationality" name="Indian" />
       <AboutDetailSingle head="Phone" name="(+91) 9877095889" />
       <AboutDetailSingle head="Email" name="harryjalandhria6@gmail.com" />
       <AboutDetailSingle head="Freelance" name="Available" />
        </div>
    </section>
    </>
  )
}

export default About
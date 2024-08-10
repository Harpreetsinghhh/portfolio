import React from 'react'
import SectionHeadComponent from './SectionHeadComponent'
import SkillBox from './SkillBox'


const Skills = () => {
  return (
    <>
   <section className='skills_section text-white '>
        <SectionHeadComponent sectionclass="skills_head" sectionname="Skills"/>
        <div className="container flex flex-col items-center md:flex-row md:justify-center md:gap-4">
        <SkillBox percent="90%" skill="PHP,Laravel" border="border-green-600" textcolor="text-green-600"/>
        <SkillBox percent="88%" skill="HTML,CSS" border="border-blue-600" textcolor="text-blue-600"/>
        <SkillBox percent="79%" skill="JavaScript" border="border-orange-400" textcolor="text-orange-400"/>
        </div>
   </section>
    </>
  )
}

export default Skills
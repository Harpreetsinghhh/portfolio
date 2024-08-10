import React from 'react'
import SectionHeadComponent from './SectionHeadComponent'
import ExperienceBox from './ExperienceBox'
const Experience = () => {
  return (
    <>
    <SectionHeadComponent sectionname="Study & Experience" sectionclass="experience_head"/>
    <ExperienceBox head="BACHELOR IN SCIENCE" subhead="DAV College" pcontent="Ipsum erat duis leo lectus tellus neque dictumst. Dignissim tortor quis nisl mi lectus. Massa facilisis ac eget fermentum vitae. Dictum rutrum sed." />
    <ExperienceBox head="DESIGN & DEVELOPMENT" subhead="Kuroit UK" pcontent="Ipsum erat duis leo lectus tellus neque dictumst. Dignissim tortor quis nisl mi lectus. Massa facilisis ac eget fermentum vitae. Dictum rutrum sed." />
    
    </>
  )
}

export default Experience
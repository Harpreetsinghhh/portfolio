import React from 'react'

const SectionHeadComponent = (props) => {
  return (
    <>
        <div className={`${props.sectionclass} flex items-center my-2`}>
            <h4 className='text-2xl max-w-fit w-full me-2 text-white'>{props.sectionname}</h4>
            <div className='rightline'></div>
        </div>
    </>
  )
}

export default SectionHeadComponent
import React from 'react'

const AboutDetailSingle = (props) => {
  return (
    <>
        <div className='about_detailsub_single flex justify-between w-full'>
            <p className='text-slate-400'>{props.head}:</p>
            <p className='text-white'>{props.name}</p>
        </div>
    </>
  )
}

export default AboutDetailSingle
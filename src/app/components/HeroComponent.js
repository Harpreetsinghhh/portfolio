import Image from 'next/image'
import React from 'react'

const HeroComponent = () => {
  return (
    <section className='flex justify-center'>
       <div className='md:hidden'>
        <Image
        src="/images/profile.png"
        alt="Hero Image"
        width={300}
        height={300}
        /> 
        </div> 
        
       <div className='hidden md:block'>
        <Image
        src="/images/profile.png"
        alt="Hero Image"
        width={500}
        height={500}
        /> 
        </div> 
    </section>
  )
}

export default HeroComponent
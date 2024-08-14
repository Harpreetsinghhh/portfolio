import React from 'react'
import Button from './Button.js'

const Contactform = () => {
  return (
    <>

            <form className='contact_form my-3'>
            
              <div className='form flex flex-col md:flex-row'>
                    <div className='md:w-1/2 my-1  md:mr-2 md:mb-2'>

                      <div className='flex flex-col mb-2'>
                      <label for="name">Name</label>
                      <input type="text" name="name" placeholder="Your Name" className="bg-transparent outline-none border-b-2 border-white focus:border-b-2 focus:border-green-500"/>
                      </div>

                      <div className='flex flex-col'>
                      <label for="email">
                          Email
                      </label>
                      <input type="text" name="email" placeholder="Your Email" className="bg-transparent outline-none border-b-2 border-white focus:border-b-2 focus:border-green-500"/>
                      </div>
                      
                    </div>

                      <div className='md:w-1/2 my-1'>

                      <div className='flex flex-col mb-2'>
                      <label for="subject">Subject</label>
                      <input type="text" name="subject" placeholder="Your Subject" className="bg-transparent outline-none border-b-2 border-white focus:border-b-2 focus:border-green-500"/>
                      </div>

                      <div className='flex flex-col'>
                      <label for="message">Message</label>
                      <input type="text" name="message" placeholder="Your Message" className="bg-transparent outline-none border-b-2 border-white focus:border-b-2 focus:border-green-500"/>
                      </div>

                      </div>
              </div>
                    <Button bgcolor="bg-green-500" name="Submit"/>
            </form>
          
    </>
  )
}

export default Contactform
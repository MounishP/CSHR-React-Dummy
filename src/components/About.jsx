import React from 'react'

function About() {
  return (
    <div id='about' className='p-8 sm:p-16 bg-blue-950'>

      <div className='flex flex-col-reverse sm:flex-row md:flex-row'>

        <div className='w-full sm:w-1/2 p-2'>
          <img className='rounded-3xl w-full' src="https://img.youtube.com/vi/X9ALkpaXqWM/hqdefault.jpg" alt="" />
        </div>

        <div className='w-full sm:w-1/2 p-4 flex flex-col text-center content-center justify-center'>
          <h1 className='text-2xl sm:text-4xl font-bold text-yellow-500 mb-4'>About Us</h1>
          <p className='mb-4 text-white'>Welcome to Careerschool, your trusted partner in career placement and professional development. We understand that finding the right career path and excelling in today's competitive job market can be challenging. That's why we're here to provide unparalleled support and guidance to individuals at every stage of their career journey</p>
          <p className='text-white'>With a focus on personalized service, we take the time to understand the unique needs and aspirations of each client. Whether you're a recent graduate exploring your options, a mid-career professional seeking advancement opportunities, or someone looking to make a career transition, we have the expertise and resources to help you succeed.</p>
        </div>

      </div>
    </div>

  )
}

export default About
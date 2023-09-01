import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>

        <div className='flex flex-col justify-center items-center w-full h-full'>

            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#58b6d8]'>About</p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
           <div>
            <p className='sm:text-right text-4xl font-bold'>
                Entry-Level Web Developer Based in Utah
            </p>
            </div>
            <div>
                <p>
                    I am a recent graduate of Fort Hays State University with a Bachelors degree in Computer Science. 
                    I am skilled in a variety of programming languages and have taken on various projects 
                    individually and with colleugues to expand my knowledge of web design and ultimately learn how to provide clients with high quality work.  
                    I am passionate about producing exceptional work and strive to improve businesses one line of code at a time.   
                </p>
            </div>
            </div>

        </div>
      
    </div>
  )
}

export default About

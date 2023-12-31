import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import Resume from '../assets/pdfs/lmyersResume.pdf'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      
      {/** Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#58b6d8]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Lauren Myers</h1>
        <h2 className='text-4xl sm-text-7xl font-bold text-[#8892b0]'>I'm a Junior Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a junior developer specializing in building and 
        designing exceptional digital experiences. Currently, I'm focused on 
        building responsive full-stack web applications. </p>
     
      <div> 
      <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#47565c] hover:border-[#47565c]'>
         <a href={Resume}>View Resume</a>
        </button>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#59b6d8] hover:border-[#59b6d8] '>
        <Link to='work' smooth={true} duration={500}>
             View My Work
              </Link>
        <span className='group-hover:rotate-90 duration-300'>
        <HiArrowNarrowRight className='ml-3'/>
        </span>
        </button>
        
      </div>
      
      </div>
    </div>
  )
}

export default Home

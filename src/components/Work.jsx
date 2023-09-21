import React from 'react'
import Library from '../assets/projects/library.jpg' 
import ResponsiveWeb from '../assets/projects/ResponsiveWebsite.jpg'
import StreamingWeb from '../assets/projects/streamingWebsite.jpg'
import BugTracker from '../assets/projects/bugTracker.jpg'
import MERN from '../assets/projects/MRN.jpg'
import StateAPI from '../assets/projects/stateAPI.jpg'





const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#58b6d8]'>Work</p>
            <p className='py-6'> Check out some of my recent projects.  </p>
            <p className='text-xs'> (The Library and IssueTracker App are hosted
            on Render, which spin down with inactivity. It may take a few minutes for the page load after clicking these demo links.) </p>
          </div>

        {/** Container */}
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          
          {/**Grid Item */}
            <div style={{backgroundImage:`url(${ResponsiveWeb})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               
               {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'> Responsive Website

                </span>
                  <div className='pt-8 text-center'>
                    
                    <a href="https://brilliant-macaron-9fd045.netlify.app">
                      <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    
                    </a>
                    <a href="https://github.com/lmyers427/simpleWebsite/tree/master">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    
                    </a>

                  </div>
                
              </div>


            </div>

             {/**Grid Item */}
             <div style={{backgroundImage:`url(${StreamingWeb})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               
               {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'> Streaming Website

                </span>
                  <div className='pt-8 text-center'>
                    
                    <a href="https://netflix-clone-dc4c4.firebaseapp.com">
                      <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    
                    </a>
                    <a href="https://github.com/lmyers427/netflix-clone">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    
                    </a>

                  </div>
                
              </div>


            </div>

            {/**Grid Item */}
            <div style={{backgroundImage:`url(${BugTracker})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               
               {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'> Issue Tracker

                </span>
                  <div className='pt-8 text-center'>
                    
                    <a href="https://issuetracker-grl6.onrender.com">
                      <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    
                    </a>
                    <a href="https://github.com/lmyers427/issueTracker">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    
                    </a>

                  </div>
                
              </div>


            </div>

             {/**Grid Item */}
             <div style={{backgroundImage:`url(${StateAPI})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               
               {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'> States REST API

                </span>
                  <div className='pt-8 text-center'>
                    
                    <a href="https://lacy-adaptable-society.glitch.me/states">
                      <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    
                    </a>
                    <a href="https://github.com/lmyers427/finalProjectLaurenMyers">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    
                    </a>

                  </div>
                
              </div>


            </div>

            {/**Grid Item */}
            <div style={{backgroundImage:`url(${MERN})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               
               {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'> MERN PROJECT

                </span>
                  <div className='pt-8 text-center'>
                    
                    <a href="/">
                      <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>Coming</button>
                    
                    </a>
                    <a href="/">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Soon</button>
                    
                    </a>

                  </div>
                
              </div>


            </div>

             {/**Grid Item */}
             <div style={{backgroundImage:`url(${Library})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               
               {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'> Bookstore App

                </span>
                  <div className='pt-8 text-center'>
                    
                    <a href="https://library-app-f6dj.onrender.com">
                      <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    
                    </a>
                    <a href="https://github.com/lmyers427/libraryApp">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    
                    </a>

                  </div>
                
              </div>


            </div>

          </div>
          

      </div>
    </div>
  )
}

export default Work

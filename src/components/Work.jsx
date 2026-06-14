import React from 'react'
import Library from '../assets/projects/library.jpg' 
import TableauDash from '../assets/projects/TableauDash.png'
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
            <p className='py-6'> Recent Projects  </p>
          </div>

        {/** Container */}
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          
          {/**Grid Item */}
            <div style={{backgroundImage:`url(${TableauDash})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               
               {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'> USDA Tableau Dashboard

                </span>
                  <div className='pt-8 text-center'>
                    
                   
                    <a href="https://public.tableau.com/app/profile/lauren.myers5575/viz/PesticideAnalysis/USDAPesticideResidueAnalysis">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                    
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

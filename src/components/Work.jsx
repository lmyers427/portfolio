import React from 'react'
import TableauDash from '../assets/projects/TableauDash.png'
import USDAWriteUp from '../assets/projects/USDAWriteup.png'
import USDAPowerPoint from '../assets/projects/USDAPowerPoint.png'
import USDAPDFPWR from'../assets/pdfs/usdaPresentation.pdf'
import USDAPDFWU from '../assets/pdfs/usdaWriteup.pdf'






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
                <span className='text-2xl font-bold text-white tracking-wider'> Interactive Dashboard

                </span>
                  <div className='pt-8 text-center'>
                    
                   
                    <a href="https://public.tableau.com/app/profile/lauren.myers5575/viz/PesticideAnalysis/USDAPesticideResidueAnalysis">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                    
                    </a>

                  </div>
                
              </div>


            </div>

             {/**Grid Item */}
             <div style={{backgroundImage:`url(${USDAPowerPoint})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               
               {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'> Project Presentation

                </span>
                  <div className='pt-8 text-center'>
                    
                    
                    <a href={USDAPDFPWR}>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                    
                    </a>

                  </div>
                
              </div>


            </div>

            {/**Grid Item */}
            <div style={{backgroundImage:`url(${USDAWriteUp})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               
               {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'> Analysis Write Up

                </span>
                  <div className='pt-8 text-center'>
                    
                    <a href={USDAPDFWU}>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                    
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

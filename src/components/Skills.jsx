import React from 'react'
import Javascript from '../assets/javascript.png'
import Excel from '../assets/excel.png'
import Tableau from '../assets/tableau.png'
import Python from '../assets/python.png'
import Pandas from '../assets/pandas.png'
import SQL from '../assets/sql.png'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
       
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#58b6d8]'>Skills</p>
                <p className='py-4'> These are a few of the technologies of I have worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                
                <div className='shadow-md shaddow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Python} alt="Python icon" />
                <p className='my-4'>Python</p>
                </div>

                <div className='shadow-md shaddow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={SQL} alt="SQL icon" />
                <p className='my-4'>SQL</p>
                </div>

                <div className='shadow-md shaddow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Excel} alt="Excel icon" />
                <p className='my-4'>Excel</p>
                </div>

                <div className='shadow-md shaddow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Tableau} alt="Tableau icon" />
                <p className='my-4'>Tableau</p>
                </div>
                
                <div className='shadow-md shaddow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shaddow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Javascript} alt="Javascript icon" />
                <p className='my-4'>Javascript</p>
                </div>

                <div className='shadow-md shaddow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                <p className='my-4'>CSS</p>
                </div>

                <div className='shadow-md shaddow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Pandas} alt="Pandas icon" />
                <p className='my-4'>Pandas</p>
                </div>

                
            </div>
        </div>

    </div>
  )
}

export default Skills

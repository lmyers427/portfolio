import React from 'react'
import Javascript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import Python from '../assets/python.png'
import Tailwind from '../assets/tailwind.png'
import Mongo from '../assets/mongo.png'
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
                <img className='w-20 mx-auto' src={Python} alt="Python icon" />
                <p className='my-4'>Python</p>
                </div>

                <div className='shadow-md shaddow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt="ReactImg icon" />
                <p className='my-4'>React</p>
                </div>

                <div className='shadow-md shaddow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                <p className='my-4'>NodeJS</p>
                </div>

                <div className='shadow-md shaddow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                <p className='my-4'>Tailwindcss</p>
                </div>

                <div className='shadow-md shaddow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Mongo} alt="Mongo icon" />
                <p className='my-4'>Mongo DB</p>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Skills

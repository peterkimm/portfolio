import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import '../css/home.css'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#17171F]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-gray-300'>Hello, my name is</p>
            <h1 data-text='Peter.Kim' 
                className='text-4xl sm:text-7xl font-bold'>Peter.Kim</h1>
            <h3 className='text-md sm:text-7xl italic font-bold text-orange-300'>"DO WHAT YOU LOVE LOVE WHAT YOU DO"</h3>
            <p className='text-gray-300 py-4 max-w-[700px]'>I'm a Los Angeles-based software engineer who specializes in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building responisve full-stack web applications.</p>
            <div>
                <Link to='work' smooth={true} duration={500}>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-teal-300 animate-bounce'>View Work
                <span className='group-hover:rotate-180 duration-500'>
                <HiArrowNarrowRight className='ml-3' />
                </span>
                </button>
                </Link>
            </div>

        </div>

    </div>
  )
}

export default Home
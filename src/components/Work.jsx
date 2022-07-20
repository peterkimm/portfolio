import React from 'react';
import Pro1 from '../assets/project-1-img.png';
import Pro2 from '../assets/project-2-img.png';
import Pro3 from '../assets/project-3-img.png';
import Pro4 from '../assets/project-4-img.png';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen tezt-gray-300 bg-[#17171F]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-teal-300'>Work</p>
                <p className='py-6 text-gray-300'>// Check out some of my recent work <br /> // Stay tuned for more work to be posted</p>
            </div>


            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 animate-pulse'>
                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Pro1})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            JavaScript/jQuery/API
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://chipper-jelly-222760.netlify.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce hover:bg-gradient-to-r from-orange-200 to-orange-500'>Demo</button>
                            </a>
                            <a href="https://github.com/peterkimm/Project-1">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce hover:bg-gradient-to-r from-orange-200 to-orange-500'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Pro2})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Node/Express/MongoDB
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://ll-eat.herokuapp.com/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce hover:bg-gradient-to-r from-orange-200 to-orange-500'>Demo</button>
                            </a>
                            <a href="https://github.com/peterkimm/Project-2-LL-EAT">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce hover:bg-gradient-to-r from-orange-200 to-orange-500'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Pro3})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React/NodeJS/Express
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://appliedjobtracker.netlify.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce hover:bg-gradient-to-r from-orange-200 to-orange-500'>Demo</button>
                            </a>
                            <a href="https://github.com/peterkimm/applied_frontend">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce hover:bg-gradient-to-r from-orange-200 to-orange-500'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Pro4})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Python/Django/PostreSQL
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://devlife-24.herokuapp.com/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce hover:bg-gradient-to-r from-orange-200 to-orange-500'>Demo</button>
                            </a>
                            <a href="https://github.com/peterkimm/DevLife">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg animate-bounce hover:bg-gradient-to-r from-orange-200 to-orange-500'>Code</button>
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
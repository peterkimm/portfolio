import React from 'react'


const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#17171F] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-teal-400'>About Me</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi! I'm Peter, nice to meet you. I would love to work/collab with you. </p>
                    </div>
                    <div>
                        <p>I am a full-stack software engineer that recently graduated from a bootcamp called General Assembly, an intensive, twelve-week, 450+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies.
                            I am passionate about building excellent software that improves the lives of those around me. What would you do if you had a software engineer available at your fingertips?</p>
                    </div>
                    <div>
                        <img className='bg-[#17171F] rounded-full flex justify-center' src="https://i.imgur.com/omy2BUZ.jpg" alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
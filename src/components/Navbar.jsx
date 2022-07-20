import React, { useState } from 'react';
import { FaBars, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#17171F] text-gray-300'>
            <div className='hover:text-orange-300'>
                PETER KIM
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li className='hover:text-orange-300'><Link to='home' smooth={true} duration={500}>
                        Home
                    </Link></li>
                <li className='hover:text-orange-300'><Link to='about' smooth={true} duration={500}>
                    About
                </Link></li>
                <li className='hover:text-orange-300'><Link to='skills' smooth={true} duration={500}>
                    Skills
                </Link></li>
                <li className='hover:text-orange-300'><Link to='work' smooth={true} duration={500}>
                    Work
                </Link></li>
                <li className='hover:text-orange-300'><Link to='contact' smooth={true} duration={500}>
                    Contact
                </Link></li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaBars />}
            </div>

            {/* Mobile Menue */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#17171F] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl hover:text-orange-300'><Link onClick={handleClick} to='home' smooth={true} duration={500}>
                    Home
                    </Link></li>
                <li className='py-6 text-4xl hover:text-orange-300'><Link onClick={handleClick} to='about' smooth={true} duration={500}>
                    About
                </Link></li>
                <li className='py-6 text-4xl hover:text-orange-300'><Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                    Skills
                </Link></li>
                <li className='py-6 text-4xl hover:text-orange-300'><Link onClick={handleClick} to='work' smooth={true} duration={500}>
                    Work
                </Link></li>
                <li className='py-6 text-4xl hover:text-orange-300'><Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                    Contact
                </Link></li>
            </ul>

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/peterkims/">
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/peterkimm">
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="mailto:peterkimm35@gmail.com">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://drive.google.com/file/d/1TmDw2x94h9Y5B4g0shC_QTs04jO2L7xC/view?usp=sharing">
                            Resume<BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>


            </div>

        </div>
    )
}

export default Navbar
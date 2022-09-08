import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegBell, FaAngleLeft } from "react-icons/fa";
import { BsChatText } from "react-icons/bs";
import logo from '../../images/Socialveins-logo.png';


const Navbar = () => {
    const menu = <>
        <li className='flex items-center justify-center text-xl text-black'>
            <Link to=''> 
            <FaRegBell />
            <p>Notifications</p>
            </Link>
        </li>
        <li className='flex items-center justify-center text-xl bg-blue-100 rounded-full font-bold text-blue-600 mx-4'>
            <Link to=''> 
            <BsChatText />
            <p>Chats</p>
            </Link>
        </li>
        <li className='flex items-center justify-center text-xl'>
            <Link to=''>
                <div className="avatar">
                    <div className="w-6 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
                <p className='text-black'>My Account</p>

            </Link>
        </li>
    </>
    return (
        <div className='drop-shadow-lg'>
            <div className="navbar bg-base-100 px-12 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <div className='flex items-center justify-center ml-20'>
                        <a className="btn btn-ghost"><img className='w-48' src={logo} alt="" /></a>
                        <p className='text-xl ml-3'><FaAngleLeft /></p>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal">
                        {menu}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
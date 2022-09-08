import React, { useState } from 'react';
import dashboard from '../../../images/sidebarIcons/darhboard_alt.png'
import explore from '../../../images/sidebarIcons/star_light.png'
import manageChampaign from '../../../images/sidebarIcons/manageChampaigns.png'
import saved from '../../../images/sidebarIcons/bookmark.png'
import launchmanageChampaign from '../../../images/sidebarIcons/launch.png'
import getHelp from '../../../images/sidebarIcons/getHelp.png';
import { RiArrowRightSFill } from "react-icons/ri";
import { FaAngleDoubleRight } from "react-icons/fa";

const LeftSidebar = () => {
    const [open, setOpen] = useState(false)

    const menuTop = [
        { title: "Dashboard", src: dashboard },
        { title: "Explore Creators", src: explore },
        { title: "Manage Campaigns", src: manageChampaign, arrow:<RiArrowRightSFill/> },
        { title: "Saved Lists", src: saved, arrow:<RiArrowRightSFill/> }
    ]

    const menuBottom = [
        { title: "Launch New Campaign", src: launchmanageChampaign },
        { title: "Get Help", src: getHelp },
    ]
    return (
        <div className=''>
            <div className={`${open ? 'lg:w-64 w-48' : 'lg:w-20 w-12'} hidden md:flex flex-col lg:justify-between h-screen lg:ml-8 md:ml-4 mt-6`}>

                {/* sidebar menu top */}
                <div>
                    <ul>
                        {menuTop.map((menu, index) => (
                            <li key={index} className='flex items-center gap-x-4 cursor-pointer my-2'>
                               <div className='hover:bg-blue-100 rounded-full py-2 px-3 relative'>
                               <span className='text-2xl absolute lg:-left-3.5 md:-left-2 right-0 bottom-1' onClick={() => setOpen(!open)}>{menu.arrow}</span>
                               <img className='w-4 lg:w-6' src={menu.src} alt="" onClick={() => setOpen(!open)} />
                               </div>
                                <span className={`${!open && "hidden"} origin-left duration-300`}> 
                                {menu.title}</span>
                                
                            </li>
                        ))}
                    </ul>
                </div>

                {/* sidebar menu bottom */}
                <div className='md:mt-10'>
                    <ul>
                        {menuBottom.map((menu, index) => (
                            <li key={index} className='flex items-center gap-x-4 cursor-pointer my-2'>
                                <div className='hover:bg-blue-100 rounded-full py-2 p-3'>
                                <img className='w-4 lg:w-6' src={menu.src} alt="" onClick={() => setOpen(!open)} />
                                </div>
                                <span className={`${!open && "hidden"} origin-left duration-200`}>{menu.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <FaAngleDoubleRight className={` ${open && 'rotate-180'} duration-300 absolute left-7 top-6 text-xl`}/>
        </div>
    );
};

export default LeftSidebar;
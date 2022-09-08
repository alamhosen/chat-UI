import React from 'react';
import { IoEllipsisVertical, IoSearchOutline } from "react-icons/io5";
import { RiSendPlane2Fill } from "react-icons/ri";
import { AiFillCamera } from "react-icons/ai";
import { GrAttachment } from "react-icons/gr";
import { BsCheckAll } from "react-icons/bs";

const Messages = () => {
    return (
        <div className='hidden flex-grow h-screen md:flex flex-col'>
            {/* messages header start */}
            <div className='flex justify-between items-center border-b-2 p-3 lg:px-10 md:px-6 py-4 '>
                <div className='flex justify-center gap-4'>
                    <div className="avatar">
                        <div className="w-10 rounded-full ring ring-success ring-offset-base-100">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                    <h2 className='text-xl font-bold'>Alex Stanton</h2>
                </div>
                <div className='flex items-center gap-4'>
                    <IoSearchOutline className='cursor-pointer'/>
                    <IoEllipsisVertical className='cursor-pointer'/>
                </div>
            </div>
            {/* messages header end */}

            {/* message body start */}
            <div className='p-3 lg:px-10 md:px-8 py-4 lg:flex-grow'>
                <div className='w-full lg:w-9/12 md:w-9/12 bg-gray-100 p-4 rounded-r-3xl rounded-bl-3xl'>
                    <p>A mouse is a small mammal. Characteristically, mice are known to have a pointed snout, small rounded ears, a body-length scaly tail, and a high breeding rate. The best known mouse species is the common house mouse. Mice are also popular as pets. In some places, certain kinds of field mice are locally common.</p>
                    <p className='text-right text-gray-400'>06:56 pm</p>
                </div>
               <div className='flex justify-end'>
               <div className='w-full lg:w-4/12 md:w-4/12 bg-blue-100 p-4 rounded-l-3xl rounded-tr-3xl mt-2'>
                    <p>Hi I am using this cat image please check and confirm</p>
                    <div className=' flex justify-end items-center'>
                    <p className='text-gray-400'>06:56 pm
                    </p>
                    <BsCheckAll className='text-xl text-blue-500'/>
                    </div>
                    
                </div>
               </div>
            </div>

            {/* message body end */}

            {/* message footer start */}
            <div className='flex items-center gap-2  p-3 lg:px-10 md:px-8 py-4 '>
                <div className='w-full relative'>
                <input type="text" placeholder="Message..." className=" rounded-full border border-slate-300 focus:outline-none w-full p-2" />
                <div className='flex absolute bottom-3 right-3 justify-end gap-3 '>
                    <AiFillCamera className='cursor-pointer'/>
                    <GrAttachment className='cursor-pointer'/>
                </div>

                </div>
                <div>
                <div className="badge badge-lg rounded-full bg-slate-50 hover:bg-blue-500 h-12 w-12 border-slate-200 ">
                <RiSendPlane2Fill className='text-gray-500 hover:text-white text-2xl'/>
                </div>
                </div>
            </div>
            {/* message footer end */}

        </div>
    );
};

export default Messages;
import React, { useState } from 'react';
import lable from '../../../../images/lable.png'
import { IoEllipsisVertical, IoSearchOutline } from "react-icons/io5";
import { BsCheckAll } from "react-icons/bs";
import { FaAngleLeft } from "react-icons/fa";
import { RiSendPlane2Fill } from "react-icons/ri";
import { AiFillCamera, AiFillTag } from "react-icons/ai";
import { GrAttachment } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import { CgTag } from "react-icons/cg";
import { GoCheck } from "react-icons/go";


const Chats = () => {
    const [messages, setMessages] = useState(false);
    const [selected, setSelected] = useState(false);
    const [labled, setLabled] = useState(false);   

    return (
        <div className='w-full lg:w-96 mt-8 static '>

            {/* chat heading start */}
            <div className='flex justify-between items-center mx-3 lg:mx-6 md:mx-6'>
                <div className='flex justify-center items-center gap-x-4'>
                    <FaAngleLeft className={` ${!selected && "lg:hidden" && "md:hidden"} text-2xl`} onClick={() =>setSelected(false) } />
                    <h2 className='text-3xl font-bold'>
                        {`${!selected ? 'Chats': '1 Selected'}`}
                    </h2>
                    <div className={`${selected && 'hidden'} badge badge-lg bg-red-500 border-none h-7 w-7 font-bold`}>2</div>
                </div>

                <div className='cursor-pointer flex items-center gap-3'>
                    <IoSearchOutline className={`${selected && "hidden"} lg:hidden`} />
                    <RiDeleteBinLine className={`${!selected && "hidden"} text-xl`}/>
                    <CgTag className={`${!selected && "hidden"} text-xl`} onClick={ () => setLabled(true)}/>
                    <IoEllipsisVertical />
                </div>
            </div>
            {/* chat heading end */}

            {/* search filed start */}
            <div className='hidden lg:block mt-8 relative mx-3 lg:mx-6 md:mx-6 '>
                <input type="text" placeholder="" className=" w-full bg-gray-100 rounded-full py-1 px-3 " />
                <div className='flex items-center gap-x-2 absolute bottom-1 left-3 '>
                    <IoSearchOutline />
                    <span>Search</span>
                </div>
            </div>
            {/* search filed end */}

            {/* friends section start */}
            <div>
                <div className='mt-5 flex items-center justify-start gap-x-3 active bg-blue-100 py-3 px-3 lg:px-6 md:px-6'>
                    <div>
                        <div className="avatar cursor-pointer static" onClick={() => setSelected(true)}>
                            <div className="w-10 rounded-full lg:ring lg:ring-success ring-offset-base-100">
                                <GoCheck className={` ${!selected && 'hidden'} bg-blue-500 w-10 h-10 text-white`} />
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='flex justify-between items-center '>
                            <div className='flex items-center  gap-1'>
                                <h2 onClick={() => setMessages(true)} className='text-xl font-bold cursor-pointer'>Alex Stanton</h2>
                                <img src={lable} alt="" className={`${!labled && 'hidden'} w-6`}/>
                                
                            </div>
                            <div>
                                <p className='text-gray-400'>07:50 pm</p>
                            </div>
                        </div>
                        <div>
                            <div className='truncate flex items-center gap-1'>
                                <BsCheckAll className='text-xl' /> <span className='text-gray-400'>Cool will catch up tomorrow..</span></div>
                        </div>
                    </div>

                </div>
                <div className='mt-5 flex items-center justify-start gap-x-3 py-3 px-3 lg:px-6 md:px-6'>
                    <div>
                        <div className="avatar">
                            <div className="w-10 rounded-full ring ring-success ring-offset-base-100">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='flex justify-between items-center '>
                            <div>
                                <h2 className='text-xl font-bold'>Alex Stanton</h2>
                            </div>
                            <div>
                                <p className='text-gray-400'>07:50 pm</p>
                            </div>
                        </div>
                        <div>
                            <div className='truncate flex items-center gap-1'>
                                <BsCheckAll className='text-xl' /> <span className='text-gray-400'>Cool will catch up tomorrow..</span></div>
                        </div>
                    </div>
                </div>

                {/* message section for mobile start */}
                <div className={`${!messages ? 'hidden' : ''} lg:hidden md:hidden flex-grow h-screen flex flex-col absolute top-0 left-0 bg-white`}>
                        {/* messages header start */}
                        <div className='flex justify-between items-center border-b-2 p-3 lg:px-10 md:px-8 py-4 '>
                            <div className='flex justify-center items-center gap-4'>
                            <FaAngleLeft className='text-2xl' onClick={() => setMessages(false)} />
                                <div className="avatar">
                                    <div className="w-10 rounded-full ring ring-success ring-offset-base-100">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                                <h2 className='text-xl font-bold'>Alex Stanton</h2>
                            </div>
                            <div className='flex items-center gap-4'>
                                <IoSearchOutline className='cursor-pointer' />
                                <IoEllipsisVertical className='cursor-pointer' />
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
                                        <BsCheckAll className='text-xl text-blue-500' />
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* message body end */}

                        {/* message footer start */}
                        <div className='flex items-center gap-2 mt-5 p-3 lg:px-10 md:px-8 py-4 '>
                            <div className='w-full relative'>
                                <input type="text" placeholder="Message..." className=" rounded-full border border-slate-300 focus:outline-none w-full p-2" />
                                <div className='flex absolute bottom-3 right-3 justify-end gap-3 '>
                                    <AiFillCamera className='cursor-pointer' />
                                    <GrAttachment className='cursor-pointer' />
                                </div>

                            </div>
                            <div>
                                <div className="badge badge-lg rounded-full bg-slate-50 hover:bg-blue-500 h-12 w-12 border-slate-200 ">
                                    <RiSendPlane2Fill className='text-gray-500 hover:text-white text-2xl' />
                                </div>
                            </div>
                        </div>
                        {/* message footer end */}

                    </div>

                    {/* message section for mobile end */}
            </div>
            {/* friends section end */}

        </div>
    );
};

export default Chats;
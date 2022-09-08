import React from 'react';
import LeftSidebar from './LeftSidebar/LeftSidebar';
import MessageContainer from './MessageContainer/MessageContainer';

const Container = () => {
    return (
        <div className='flex items-center '>
            <div className='border-r-2'>
                <LeftSidebar></LeftSidebar>
            </div>
            <div className='w-full'>
               <MessageContainer></MessageContainer>
            </div>
        </div>
    );
};

export default Container;
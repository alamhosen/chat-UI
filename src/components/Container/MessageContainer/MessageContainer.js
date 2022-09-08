import React from 'react';
import Chats from './Chats/Chats';
import Messages from './Messages/Messages';

const MessageContainer = () => {
    return (
        <div className='flex w-auto md:flex-col lg:flex-row flex-col'>
            <div className='lg:border-r-2 w-auto'>
                <Chats></Chats>
            </div>
            <div className='w-auto '>
                <Messages></Messages>
            </div>
        </div>
    );
};

export default MessageContainer;
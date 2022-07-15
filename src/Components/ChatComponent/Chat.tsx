import React from 'react';
import './Chat.css';
import ChatContent from './ChatContent';
import ChatSideBar from './ChatSideBar';

type Props = {};

const Chat = (props: Props) => {
    return (
        <div className="wed-content">
            <ChatSideBar />
            <ChatContent />
        </div>
    );
};

export default Chat;

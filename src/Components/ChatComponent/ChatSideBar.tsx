import React from 'react';
import ChatSideBarBody from './ChatSideBarBody';
import ChatSideBarBottom from './ChatSideBarBottom';
import ChatSideBarHeader from './ChatSideBarHeader';
import { useAppSelector } from 'src/app/hooks';
import { userInfo } from 'src/features/AuthFile/Auth';

type Props = {};

const ChatSideBar = (props: Props) => {
    const user = useAppSelector(userInfo);
    return (
        <div className="content-left">
            <ChatSideBarHeader user={user} />
            <ChatSideBarBody user={user} />
            <ChatSideBarBottom />
        </div>
    );
};

export default ChatSideBar;

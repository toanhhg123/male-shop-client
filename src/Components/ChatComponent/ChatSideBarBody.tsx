import React, { useEffect } from 'react';
import { User } from 'src/Models/User';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { chatRequest, chatData } from 'src/features/chatSlice';
import ChatFriendTab from './ChatFriendTab';

type Props = {
    user?: User;
};

const ChatSideBarBody = (props: Props) => {
    const dispatch = useAppDispatch();
    const friends = useAppSelector(chatData);
    useEffect(() => {
        dispatch(chatRequest(props.user?._id || ''));
    }, [dispatch, props]);
    return (
        <div className="msg__left__body">
            <div className="left-messager">
                <div className="left-messager__header">
                    <div className="block-mess__see-more-icon">
                        <span className="left-messager__header-title">
                            Messager
                        </span>
                        <i className="bi bi-chevron-compact-down"></i>
                    </div>
                    <div className="left-messager__block-search">
                        <div className="left-messager__block-search-block-icon">
                            <i className="bi bi-search left-messager__block-search-icon"></i>
                        </div>
                        <div className="left-messager__block-search-block-star">
                            <i className="bi bi-star left-messager__block-star-icon"></i>
                        </div>
                    </div>
                </div>
                <ul className="messager__list">
                    {friends &&
                        friends.map((friend, index) => (
                            <ChatFriendTab
                                key={index}
                                _id={props.user?._id || ''}
                                number={friend.number}
                            />
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default ChatSideBarBody;

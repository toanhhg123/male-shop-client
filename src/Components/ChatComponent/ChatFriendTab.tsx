import React, { useEffect, useState } from 'react';
import { getUserById } from 'src/API/AuthAPI';
import { Chat } from 'src/Models/ChatModel';
import { User } from 'src/Models/User';

type Props = {
    number: [string];
    _id: string;
};

const ChatFriendTab = ({ number, _id }: Props) => {
    const [friend, setFriend] = useState<User | undefined>(undefined);

    useEffect(() => {
        const friendId = number.find((id) => id !== _id);
        getUserById(friendId || '')
            .then((user) => {
                setFriend(user);
            })
            .catch((e) => setFriend(undefined));
    }, [_id, number]);
    return friend ? (
        <li className="messager__item">
            <img src={friend.imageUrl} alt="" className="messager__item-img" />
            <div className="messager__item-description">
                <div className="messager__item-title">
                    <span className="messager__item-title-text">
                        {friend.userName}
                    </span>
                    <i className="bi bi-pin-angle-fill messager__item-title-pin-icon"></i>
                </div>
                <div className="messager__item-mini-title">
                    <i className="bi bi-pencil-fill messager__item-mini-title-edit-icon"></i>
                    <span className="messager__item-mini-title-text">
                        Andy is typing
                    </span>
                </div>
            </div>
            <div className="messager__item-number-notification">
                <span className="messager__item-number-notification-text">
                    2
                </span>
            </div>
        </li>
    ) : (
        <></>
    );
};

export default ChatFriendTab;

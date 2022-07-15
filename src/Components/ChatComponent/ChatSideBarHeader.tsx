import React from 'react';
import { User } from 'src/Models/User';

type Props = {
    user?: User;
};

const ChatSideBarHeader = ({ user }: Props) => {
    return (
        <div className="left-all__header">
            <img src={user?.imageUrl} alt="" className="left-all__header-img" />
            <div className="left-all__block-mess">
                <div className="block-mess__mess-icon">
                    <i className="bi bi-wechat"></i>
                </div>
                <span className="block-mess__all-text">All</span>
                <div className="block-mess__see-more-icon">
                    <i className="bi bi-chevron-compact-down"></i>
                </div>
            </div>
        </div>
    );
};

export default ChatSideBarHeader;

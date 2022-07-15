import React from 'react';

type Props = {};

const ChatSideBarBottom = (props: Props) => {
    return (
        <div className="left-messager-bottom">
            <div className="left-messager-bottom-block-1">
                <div className="bottom-block-1-more">
                    <i className="bi bi-three-dots bottom-block-1-more-icon"></i>
                </div>
                <div className="bottom-block-1-live">
                    <i className="bi bi-wifi bottom-block-1-live-icon"></i>
                    <span className="bottom-block-1-live-text">LIVE</span>
                </div>
                <div className="bottom-block-1-time">23:54</div>
            </div>
            <div className="left-messager-bottom-block-2">
                <div className="bottom-block-2-img">
                    <img
                        src="../img/user_1.jpg"
                        alt=""
                        className="bottom-block-2-img-one"
                    />
                    <img
                        src="../img/user_1.jpg"
                        alt=""
                        className="bottom-block-2-img-tow"
                    />
                </div>
                <div className="bottom-block-2-number-member">2</div>
            </div>
        </div>
    );
};

export default ChatSideBarBottom;

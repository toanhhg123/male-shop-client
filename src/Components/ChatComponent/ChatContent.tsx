import React from 'react';

type Props = {};

const ChatContent = (props: Props) => {
    return (
        <div className="content-right">
            <div className="content-right_header">
                <div className="content-right_header-block-1">
                    <div className="content-right_header-menu-icon">
                        <i className="bi bi-ui-radios-grid"></i>
                    </div>
                    <span className="content-right_header-chat-text">Chat</span>
                    <span className="content-right_header-chat-number-text">
                        20
                    </span>
                </div>
                <div className="content-right_header-block-2">
                    <div className="content-right-header-block-2-icon">
                        <i className="bi bi-camera-video"></i>
                    </div>
                    <div className="content-right-header-block-2-icon">
                        <i className="bi bi-telephone"></i>
                    </div>
                    <div className="content-right-header-block-2-icon">
                        <i className="bi bi-volume-down"></i>
                    </div>
                    <div className="content-right-header-block-2-icon">
                        <i className="bi bi-image"></i>
                    </div>
                    <div className="content-right-header-block-2-icon">
                        <i className="bi bi-file-earmark-text"></i>
                    </div>
                </div>
            </div>
            <div className="wr__mess__list">
                <div className="mess__text__item">
                    <div className="mess__text__user">
                        <img src="../img/user_1.jpg" alt="" />
                    </div>
                    <div className="mess__text__message">
                        <div className="mess__text__info">
                            <span>David roller</span>
                            <small>4 PM</small>
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Soluta aperiam fuga quam officiis! Quia,
                            praesentium labore? Maiores, neque reprehenderit
                            vero natus laborum suscipit! Consequatur in esse
                            veniam doloribus possimus voluptatibus!
                        </p>
                    </div>
                </div>
                <div className="mess__text__item">
                    <div className="mess__text__user">
                        <img src="../img/user_1.jpg" alt="" />
                    </div>
                    <div className="mess__text__message">
                        <div className="mess__text__info">
                            <span>David roller</span>
                            <small>4 PM</small>
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Soluta aperiam fuga quam officiis! Quia,
                            praesentium labore? Maiores, neque reprehenderit
                            vero natus laborum suscipit! Consequatur in esse
                            veniam doloribus possimus voluptatibus!
                        </p>
                    </div>
                </div>
                <div className="mess__text__item">
                    <div className="mess__text__user">
                        <img src="../img/user_1.jpg" alt="" />
                    </div>
                    <div className="mess__text__message">
                        <div className="mess__text__info">
                            <span>David roller</span>
                            <small>4 PM</small>
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Soluta aperiam fuga quam officiis! Quia,
                            praesentium labore? Maiores, neque reprehenderit
                            vero natus laborum suscipit! Consequatur in esse
                            veniam doloribus possimus voluptatibus!
                        </p>
                    </div>
                </div>
                <div className="mess__text__item">
                    <div className="mess__text__user">
                        <img src="../img/user_1.jpg" alt="" />
                    </div>
                    <div className="mess__text__message">
                        <div className="mess__text__info">
                            <span>David roller</span>
                            <small>4 PM</small>
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Soluta aperiam fuga quam officiis! Quia,
                            praesentium labore? Maiores, neque reprehenderit
                            vero natus laborum suscipit! Consequatur in esse
                            veniam doloribus possimus voluptatibus!
                        </p>
                    </div>
                </div>
                <div className="mess__text__item">
                    <div className="mess__text__user">
                        <img src="../img/user_1.jpg" alt="" />
                    </div>
                    <div className="mess__text__message">
                        <div className="mess__text__info">
                            <span>David roller</span>
                            <small>4 PM</small>
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Soluta aperiam fuga quam officiis! Quia,
                            praesentium labore? Maiores, neque reprehenderit
                            vero natus laborum suscipit! Consequatur in esse
                            veniam doloribus possimus voluptatibus!
                        </p>
                    </div>
                </div>
                <div className="mess__text__item ml__user">
                    <div className="mess__text__message">
                        <div className="mess__text__info">
                            <span>David roller</span>
                            <small>4 PM</small>
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Soluta aperiam fuga quam officiis! Quia,
                            praesentium labore? Maiores, neque reprehenderit
                            vero natus laborum suscipit! Consequatur in esse
                            veniam doloribus possimus voluptatibus!
                        </p>
                    </div>
                    <div className="mess__text__user">
                        <img src="../img/user_1.jpg" alt="" />
                    </div>
                </div>
                <div className="mess__text__item">
                    <div className="mess__text__user">
                        <img src="../img/user_1.jpg" alt="" />
                    </div>
                    <div className="mess__text__message">
                        <div className="mess__text__info">
                            <span>David roller</span>
                            <small>4 PM</small>
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Soluta aperiam fuga quam officiis! Quia,
                            praesentium labore? Maiores, neque reprehenderit
                            vero natus laborum suscipit! Consequatur in esse
                            veniam doloribus possimus voluptatibus!
                        </p>
                    </div>
                </div>
            </div>
            <form className="wr__mess__send">
                <div className="wr__mess__send__atv">
                    <img src="../img/user_1.jpg" alt="" />
                </div>
                <input type="text" placeholder="Your message" />
                <button type="submit">
                    <i className="bi bi-send"></i>
                </button>
            </form>
        </div>
    );
};

export default ChatContent;

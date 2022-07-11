import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const Footer = (props: Props) => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <div className="ft__box">
                            <div className="ft-logo">
                                <img src="../images/lg_remove_bn.png" alt="" />
                            </div>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Eligendi, ipsa. Voluptate
                                possimus recusandae modi officia doloribus
                                mollitia perspiciatis, facere eveniet aspernatur
                                sapiente! Eius, tempora explicabo vero officia
                                eaque quo quasi.
                            </p>
                            <div className="ft__cards d-flex gap-2">
                                <div className="ft__card-img">
                                    <img src="../images/ft_1.png" alt="" />
                                </div>
                                <div className="ft__card-img">
                                    <img src="../images/ft_2.png" alt="" />
                                </div>
                                <div className="ft__card-img">
                                    <img src="../images/ft_3.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-3">
                        <div className="ft__box">
                            <h3>SHOPPING</h3>
                            <Link to="">Clothing Store</Link>
                            <Link to="">Accessories</Link>
                            <Link to="">Sale</Link>
                        </div>
                    </div>

                    <div className="col-12 col-lg-3">
                        <div className="ft__box">
                            <h3>SHOPPING</h3>
                            <Link to="">Contact us</Link>
                            <Link to="">Payment method</Link>
                            <Link to="">Delivery</Link>
                            <Link to="">Return & Exchange</Link>
                        </div>
                    </div>

                    <div className="col-12 col-lg-3">
                        <div className="ft__box">
                            <h3>NEWLETTER</h3>
                            <p>
                                Be the first to know about new arrivals, look
                                books, sales & promos!
                            </p>
                            <form action="">
                                <input
                                    type="text"
                                    placeholder="Your Email"
                                    name=""
                                    id=""
                                />
                                <i className="bi bi-chat-dots"></i>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

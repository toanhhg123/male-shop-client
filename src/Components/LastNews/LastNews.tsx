import React from 'react';
import { Link } from 'react-router-dom';
import ln_1 from 'src/assets/images/ln_1.png';
import ln_2 from 'src/assets/images/ln_2.png';
import ln_3 from 'src/assets/images/ln_3.png';

type Props = {};

const LastNews = (props: Props) => {
    return (
        <div className="lastnew mt-5">
            <h3 className="text-center mb-3">Latest News</h3>
            <h2 className="text-center mb-5">Fashion New Trends</h2>
            <div className="container">
                <div className="ln__cards">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-4 mt-2">
                            <div className="ln__card">
                                <div className="ln__card-img">
                                    <img src={ln_1} alt="" />
                                </div>
                                <div className="ln__ct">
                                    <p>16 February 2020</p>
                                    <h4>
                                        What Curling Irons Are The Best Ones
                                    </h4>
                                    <Link to="/home">Read More</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4 mt-2">
                            <div className="ln__card">
                                <div className="ln__card-img">
                                    <img src={ln_2} alt="" />
                                </div>
                                <div className="ln__ct">
                                    <p>16 February 2020</p>
                                    <h4>
                                        What Curling Irons Are The Best Ones
                                    </h4>
                                    <Link to="/shop">Read More</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4 mt-2">
                            <div className="ln__card">
                                <div className="ln__card-img">
                                    <img src={ln_3} alt="" />
                                </div>
                                <div className="ln__ct">
                                    <p>16 February 2020</p>
                                    <h4>
                                        What Curling Irons Are The Best Ones
                                    </h4>
                                    <Link to="/shop">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LastNews;

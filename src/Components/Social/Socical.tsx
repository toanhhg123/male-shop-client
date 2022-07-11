import React from 'react';
import sc_1 from 'src/assets/images/sc_1.png';
import sc_2 from 'src/assets/images/sc_2.png';
import sc_3 from 'src/assets/images/sc_3.png';
import sc_4 from 'src/assets/images/sc_4.png';

type Props = {};

const Socical = (props: Props) => {
    return (
        <div className="socical mt-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-7">
                        <div className="sc__group__img">
                            <div className="sc-img">
                                <img src={sc_1} alt="" />
                            </div>
                            <div className="sc-img">
                                <img src={sc_2} alt="" />
                            </div>
                            <div className="sc-img">
                                <img src={sc_3} alt="" />
                            </div>
                            <div className="sc-img">
                                <img src={sc_4} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5">
                        <div className="sc__ig">
                            <h3>Instagram</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Assumenda iusto sequi porro
                                neque illum possimus blanditiis eveniet
                                molestiae, harum ipsum necessitatibus sit qui
                                asperiores repudiandae impedit, quos, maxime
                                adipisci eos!
                            </p>
                            <h4>#Male_Fashion</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Socical;

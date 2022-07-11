import React from 'react';
import './NotFound.scss';
import { useNavigate } from 'react-router-dom';

type Props = {};
const img = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png';
const NotFound = (props: Props) => {
    const navigate = useNavigate();
    return (
        <main>
            <div className="not-found">
                <div className="not-found__container">
                    <aside className="not-found__aside">
                        <img src={img} alt="404 Image" aria-hidden="true" />
                    </aside>
                    <div className="not-found__main">
                        <h1>Sorry!</h1>
                        <p>
                            Either you aren't cool enough to visit this page or
                            it doesn't exist
                            <em>. . . like your social life.</em>
                        </p>
                        <button
                            onClick={() => {
                                navigate('/');
                            }}
                        >
                            You can go now!
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default NotFound;

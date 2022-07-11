import React from 'react';
import Banner from 'src/Components/Banner/Banner';
import Review from 'src/Components/Review/Review';
import LayoutScreen from 'src/layout/LayoutScreen';
import HomeProduct from 'src/Components/HomeProduct/HomeProduct';
import Socical from 'src/Components/Social/Socical';
type Props = {};

const Home = (props: Props) => {
    return (
        <LayoutScreen>
            <main>
                <Banner />
                <Review />
                <HomeProduct />
                <Socical />
            </main>
        </LayoutScreen>
    );
};

export default Home;

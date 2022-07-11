import React from 'react';
import Profile from 'src/Components/profile/Profile';
import LayoutScreen from 'src/layout/LayoutScreen';

type Props = {};

const ProfileScreen = (props: Props) => {
    return (
        <LayoutScreen>
            <main>
                <Profile />
            </main>
        </LayoutScreen>
    );
};

export default ProfileScreen;

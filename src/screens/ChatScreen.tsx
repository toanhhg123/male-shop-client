import React from 'react';
import Chat from 'src/Components/ChatComponent/Chat';
import LayoutScreen from 'src/layout/LayoutScreen';

type Props = {};

const ChatScreen = (props: Props) => {
    return (
        <LayoutScreen>
            <main>
                <Chat />
            </main>
        </LayoutScreen>
    );
};

export default ChatScreen;

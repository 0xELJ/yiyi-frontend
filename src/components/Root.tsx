import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useGlobalState } from '../hooks/useGlobalState';
import { useActions } from '../hooks/useActions';
import { connect as connectSocket, listenForMessage, listenForRoomData } from "../actions";
import ChatRoom from "./chat/ChatRoom";
import Login from './auth/Login';
import { ChatMenuButton } from "./chat/ChatMenuButton";
import { Spinner } from "./shared/Spinner";
import { RootProps } from "../types/props/RootProps";
import ModalGenerator from "./layout/ModalGenerator";
import MainGradient from './shared/MainGradient';
import { headerStyles } from '../styles/components/chat/chatHeaderStyles';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const Root: React.FC<RootProps> = (props) => {
    const socket = useGlobalState(({ socket }) => socket);
    const [connect, subscribeToRoomData, subscribeToMessages] = useActions([
        connectSocket,
        listenForRoomData,
        listenForMessage
    ], []);
    const [showSpinner, setShowSpinner] = useState<boolean>(false);

    useEffect(() => {
        connect();
    }, []);

    useEffect(() => {
        if (socket.isConnected) {
            initSocketListeners();
        }
        setShowSpinner(socket.isConnecting);
    }, [socket]);

    const initSocketListeners = () => {
        subscribeToRoomData();
        subscribeToMessages();
    };

    const toggleChatMenu = () => {
        props.navigation.toggleDrawer();
    };

    if (showSpinner) {
        return <Spinner size="large" />;
    }

    return (
        <React.Fragment>
            <Navigator initialRouteName="Login">
                <Screen
                    name="Login"
                    component={Login}
                    options={{
                        gestureEnabled: false,
                        headerShown: false
                    }}
                />
                <Screen
                    name="Chat"
                    component={ChatRoom}
                    options={{
                        gestureEnabled: false,
                        headerTitle: 'YiYi',
                        headerTitleAlign: 'left',
                        headerTitleStyle: headerStyles.title,
                        headerBackground: () => <MainGradient style={headerStyles.background} />,
                        headerRight: () => <ChatMenuButton onPress={toggleChatMenu} />,
                        headerLeft: () => null,
                    }}
                />
            </Navigator>
            <ModalGenerator />
        </React.Fragment>
    );
};

export default Root;

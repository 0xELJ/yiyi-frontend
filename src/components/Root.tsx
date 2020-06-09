import React, { useEffect, useState } from "react";
import ChatRoom from "./chat/ChatRoom";
import Login from './auth/Login';
import { createStackNavigator } from "@react-navigation/stack";
import { ChatMenuButton } from "./chat/ChatMenuButton";
import { connect } from "react-redux";
import { connect as connectSocket, listenForMessage, listenForRoomData } from "../actions";
import { SocketState } from "../types/states/SocketState";
import { Spinner } from "./shared/Spinner";
import { RootProps } from "../types/props/RootProps";
import ModalGenerator from "./layout/ModalGenerator";
import MainGradient from './shared/MainGradient';
import { headerStyles } from '../styles/components/chat/chatHeaderStyles';

const { Navigator, Screen } = createStackNavigator();

const Root: React.FC<RootProps> = (props) => {
    const [showSpinner, setShowSpinner] = useState<boolean>(false);

    useEffect(() => {
        props.connectSocket();
    }, []);

    useEffect(() => {
        if (props.socket.isConnected) {
            initSocketListeners();
        }
        setShowSpinner(props.socket.isConnecting);
    }, [props.socket]);

    const initSocketListeners = () => {
        props.listenForRoomData();
        props.listenForMessage();
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

const mapStateToProps = (state: { socket: SocketState }) => {
    return { socket: state.socket };
};

export default connect(mapStateToProps, { connectSocket, listenForRoomData, listenForMessage })(Root);

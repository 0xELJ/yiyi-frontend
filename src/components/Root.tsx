import React, { useEffect, useState } from "react";
import ChatRoom from "./chat/ChatRoom";
import { createStackNavigator } from "@react-navigation/stack";
import LoginForm from "./auth/LoginForm";
import { ChatMenuButton } from "./chat/ChatMenuButton";
import { connect } from "react-redux";
import { connect as connectSocket, listenForMessage, listenForRoomData } from "../actions";
import { SocketState } from "../types/SocketState";
import { Spinner } from "./shared/Spinner";
import { ConfirmModal } from "./shared/ConfirmModal";
import { RootProps } from "../types/RootProps";

const { Navigator, Screen } = createStackNavigator();

const Root: React.FC<RootProps> = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);

    useEffect(() => {
        props.connectSocket();
    }, []);

    useEffect(() => {
        if (props.socket.connectionError) {
            setShowModal(true);
        }
        if (props.socket.isConnected) {
            initSocketListeners();
        }
        setShowSpinner(props.socket.isConnecting);
    }, [props.socket]);

    const initSocketListeners = () => {
        props.listenForRoomData();
        props.listenForMessage();
    };

    const retryConnection = () => {
        setShowModal(false);
        props.connectSocket();
    };

    const toggleChatMenu = () => {
        props.navigation.toggleDrawer();
    };

    if (showSpinner) {
        return <Spinner size="large"/>;
    }

    return (
        <React.Fragment>
            <Navigator initialRouteName="Login">
                <Screen
                    name="Login"
                    component={LoginForm}
                    options={{
                        title: 'Registro',
                        gestureEnabled: false,
                        headerLeft: () => null
                    }}
                />
                <Screen
                    name="Chat"
                    component={ChatRoom}
                    options={{
                        gestureEnabled: false,
                        headerLeft: () => <ChatMenuButton onPress={toggleChatMenu} />
                    }}
                />
            </Navigator>
            <ConfirmModal
                visible={showModal}
                header="Error"
                body="Ocurrió un error al conectarse con el servidor"
                accept="Reintentar"
                onAccept={retryConnection} />
        </React.Fragment>
    );
};

const mapStateToProps = (state: { socket: SocketState }) => {
    return { socket: state.socket }
};

export default connect(mapStateToProps, { connectSocket, listenForRoomData, listenForMessage })(Root);

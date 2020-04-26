import React from "react";
import { ChatRoom } from "./chat/ChatRoom";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginForm } from "./auth/LoginForm";
import { ChatMenuButton } from "./chat/ChatMenuButton";

const { Navigator, Screen } = createStackNavigator();

export const Root: React.FC<any> = ({ navigation }) => {
    return (
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
                    headerLeft: () => <ChatMenuButton onPress={() => navigation.openDrawer()} />
                }}
            />
        </Navigator>
    );
};

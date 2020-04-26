import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Root } from "./src/components/Root";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ChatUserList } from "./src/components/chat/ChatUserList";

const { Navigator, Screen } = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Root" drawerContent={ChatUserList}>
                <Screen name="Root" component={Root} options={{ swipeEnabled: false }} />
            </Navigator>
        </NavigationContainer>
    );
}

import React from "react";
import { Text, View, ViewStyle } from "react-native";
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { useGlobalState } from '../../hooks/useGlobalState';
import { useActions } from '../../hooks/useActions';
import { Button } from "../shared/Button";
import { Section } from "../shared/Section";
import { leaveRoom } from "../../actions"
import { chatMenu } from '../../styles/components/chat/chatMenu';
import { MaterialIcons } from '@expo/vector-icons';
import { Container } from '../shared/Container';
import { DrawerContentComponentProps } from '@react-navigation/drawer/lib/typescript/src/types';

const ChatMenu: React.FC<DrawerContentComponentProps> = props => {
    const chat = useGlobalState(({ chat }) => chat);
    const leave = useActions(leaveRoom, []);

    const logout = () => {
        leave(chat.activeRoom.room);
        props.navigation.navigate('Login');
    };

    const userList = () => {
        return chat.activeRoom.users.map(user => {
           return (
               <View key={user} style={chatMenu.user}>
                   <View style={chatMenu.statusIndicator} />
                   <DrawerItem
                       label={user}
                       onPress={() => {}}
                       style={chatMenu.username as ViewStyle}
                   />
               </View>
           );
        });
    };

    return (
        <Container style={chatMenu.container}>
            <DrawerContentScrollView>
                <Section style={chatMenu.headerSection}>
                    <MaterialIcons name="group" size={20} color={chatMenu.usersIcon.color} />
                    <Text style={chatMenu.h3}>Users</Text>
                </Section>
                <Section  style={chatMenu.userList}>
                    {userList()}
                </Section>
            </DrawerContentScrollView>
            <Section style={chatMenu.footer}>
                <Button onPress={logout}>
                    <Text>LOGOUT</Text>
                </Button>
            </Section>
        </Container>
    );
};

export default ChatMenu;

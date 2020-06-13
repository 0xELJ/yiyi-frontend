import React from "react";
import { Text, View, ViewStyle } from "react-native";
import { connect } from "react-redux";
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Button } from "../shared/Button";
import { Section } from "../shared/Section";
import { leaveRoom } from "../../actions"
import { ChatState } from "../../types/states/ChatState";
import { ChatMenuProps } from "../../types/props/ChatMenuProps";
import { chatMenu } from '../../styles/components/chat/chatMenu';
import { MaterialIcons } from '@expo/vector-icons';
import { Container } from '../shared/Container';

const ChatMenu: React.FC<ChatMenuProps> = props => {
    const logout = () => {
        props.leaveRoom(props.chat.activeRoom.room);
        props.navigation.navigate('Login');
    };

    const userList = () => {
        return props.chat.activeRoom.users.map(user => {
           return (
               <View key={user.id} style={chatMenu.user}>
                   <View style={chatMenu.statusIndicator} />
                   <DrawerItem
                       label={user.username}
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

const mapStateToProps = (state: { chat: ChatState }) => {
    return { chat: state.chat };
};

export default connect(mapStateToProps, { leaveRoom })(ChatMenu);

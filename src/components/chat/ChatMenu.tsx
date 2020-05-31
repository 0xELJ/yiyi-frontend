import React from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Button } from "../shared/Button";
import { Section } from "../shared/Section";
import { leaveRoom } from "../../actions"
import { ChatState } from "../../types/states/ChatState";
import { ChatMenuProps } from "../../types/props/ChatMenuProps";
import { chatMenu } from '../../styles/components/chat/chatMenu';

const ChatMenu: React.FC<ChatMenuProps> = props => {
    const logout = () => {
        props.leaveRoom(props.chat.activeRoom.room);
        props.navigation.navigate('Login');
    };

    const userList = () => {
        return props.chat.activeRoom.users.map(user => {
           return <DrawerItem key={user.id} label={user.username} onPress={() => {}} />
        });
    };

    return (
        <DrawerContentScrollView>
            <Section style={{ marginTop: 20, paddingLeft: 16 }}>
                <Text style={chatMenu.header}>Sala "{props.chat.activeRoom.room}"</Text>
            </Section>
            {userList()}
            <Section style={{ marginTop: 16, paddingHorizontal: 64 }}>
                <Button onPress={logout} >
                    <Text>Salir</Text>
                </Button>
            </Section>
        </DrawerContentScrollView>
    );
};

const mapStateToProps = (state: { chat: ChatState }) => {
    return { chat: state.chat };
};

export default connect(mapStateToProps, { leaveRoom })(ChatMenu);

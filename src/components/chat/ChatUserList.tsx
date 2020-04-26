import React from "react";
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { DrawerContentComponentProps } from "@react-navigation/drawer/lib/typescript/src/types";
import { Button } from "../shared/Button";
import { Text } from "react-native";
import { Section } from "../shared/Section";

export const ChatUserList: React.FC<DrawerContentComponentProps> = props => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem label="Usuario 1" onPress={() => {}} />
            <DrawerItem label="Usuario 2" onPress={() => {}} />
            <Section style={{ marginTop: 90, paddingHorizontal: 64 }}>
                <Button onPress={() => props.navigation.navigate('Login')} >
                    <Text>Salir</Text>
                </Button>
            </Section>
        </DrawerContentScrollView>
    );
};

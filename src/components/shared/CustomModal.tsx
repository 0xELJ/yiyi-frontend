import React from 'react';
import { Text, View, Modal, Image } from 'react-native';
import { Section } from './Section';
import { Button } from './Button';
import { CustomModalState } from "../../types/states/CustomModalState";
import { modal } from '../../styles/components/shared/modal';
import errorImg from '../../assets/images/error.png';

export const CustomModal: React.FC<CustomModalState> = props => {
    const { visible, onAccept, header, body, onClose = () => {} } = props;

    return (
        <Modal
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}>
            <View style={modal.containerStyle}>
                <View style={modal.content}>
                    <Image source={errorImg} style={modal.errorImg} />
                    <Section style={modal.description}>
                        <Text style={modal.headerText}>{header}</Text>
                        <Text style={modal.bodyText}>{body}</Text>
                    </Section>
                    <Section style={modal.action}>
                        <Button onPress={onAccept}>Got it</Button>
                    </Section>
                </View>
            </View>
        </Modal>
    );
};

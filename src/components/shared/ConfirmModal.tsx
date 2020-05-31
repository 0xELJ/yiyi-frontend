import React from 'react';
import { Text, View, Modal } from 'react-native';
import { Section } from './Section';
import { Button } from './Button';
import { ConfirmModalState } from "../../types/states/ConfirmModalState";
import { modal } from '../../styles/components/shared/modal';

export const ConfirmModal: React.FC<ConfirmModalState> = props => {
    const { visible, onAccept, header, body, onClose = () => {} } = props;

    return (
        <Modal
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}>
            <View style={modal.containerStyle}>
                <View style={modal.content}>
                    <Section style={modal.header}>
                        <Text style={[modal.bodyText, modal.headerText]}>{header}</Text>
                    </Section>
                    <Section>
                        <Text style={modal.bodyText}>{body}</Text>
                    </Section>
                    <Section>
                        <Button onPress={onAccept}>Got it</Button>
                    </Section>
                </View>
            </View>
        </Modal>
    );
};

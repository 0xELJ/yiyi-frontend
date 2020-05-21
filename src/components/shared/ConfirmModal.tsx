import React from 'react';
import { Text, View, Modal, StyleSheet } from 'react-native';
import { Section } from './Section';
import { Button } from './Button';
import { ConfirmModalState } from "../../types/ConfirmModalState";

export const ConfirmModal: React.FC<ConfirmModalState> = props => {
    const { visible, onAccept, header, body, onClose = () => {} } = props;

    return (
        <Modal
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}>
            <View style={styles.containerStyle}>
                <View style={styles.content}>
                    <Section style={styles.header}>
                        <Text style={[styles.bodyText, styles.headerText]}>{header}</Text>
                    </Section>
                    <Section>
                        <Text style={styles.bodyText}>{body}</Text>
                    </Section>
                    <Section>
                        <Button onPress={onAccept}>Got it</Button>
                    </Section>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    header: {
        borderBottomColor: 'rgba(0 , 0, 0, 0.1)',
        borderBottomWidth: 1
    },
    headerText: {
        fontSize: 24,
        fontWeight: '500'
    },
    bodyText: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        width: '80%',
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#fff'
    }
});

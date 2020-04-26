import React from 'react';
import { Text, View, Modal, StyleSheet } from 'react-native';
import { Section } from './Section';
import { Button } from './Button';
import { ConfirmModalProps } from "../../types/confirm-modal.props";

export const ConfirmModal: React.FC<ConfirmModalProps> = props => {
  const { visible, children, onAccept, onDecline, onRequestClose = () => {} } = props;

  return (
      <Modal
          visible={visible}
          animationType="slide"
          onRequestClose={onRequestClose}
          transparent>
        <View style={styles.containerStyle}>
          <Section style={styles.cardSectionStyle}>
            <Text style={styles.textStyle}>{children}</Text>
          </Section>
          <Section>
            <Button onPress={onAccept}>Yes</Button>
            <Button onPress={onDecline}>No</Button>
          </Section>
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
});

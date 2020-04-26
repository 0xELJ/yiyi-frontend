import React from 'react';
import { ScrollView, StyleSheet, Text } from "react-native";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { InputField } from "../shared/InputField";

export const ChatRoom = () => {
    return (
        <Container style={styles.container}>
            <Section style={styles.messages}>
                <ScrollView>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                    <Text>Chat Messages!</Text>
                </ScrollView>
            </Section>
            <Section style={styles.input}>
                <InputField
                    hideLabel={true}
                    value=""
                    placeholder="Mensaje"
                    onChangeText={() => {}}
                />
            </Section>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 0,
        paddingTop: 16,
    },
    messages: {
        flex: 1,
        marginHorizontal: 16,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 5,
    },
    input: {
        height: 80,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    }
});

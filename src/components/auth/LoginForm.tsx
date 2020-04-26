import React from 'react';
import { StyleSheet, Text } from "react-native";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { InputField } from "../shared/InputField";
import { Spinner } from "../shared/Spinner";
import { Button } from "../shared/Button";

export const LoginForm: React.FC<any> = (props) => {
    const showError = () => {
        if (props.error) {
            return <Text style={styles.error}>{props.error}</Text>
        }
        return null;
    };

    const showButton = () => {
        if (props.loading) {
            return <Spinner size="small" />;
        }
        return (
            <Button onPress={onLogin}>
                <Text>Unirse</Text>
            </Button>
        );
    };

    const onLogin = () => {
      props.navigation.navigate('Chat');
    };

    return (
      <Container>
          <Section>
              <InputField
                  label="Usuario"
                  value=""
                  placeholder="Nombre de usuario"
                  onChangeText={() => {}}
              />
          </Section>
          <Section>
              <InputField
                  label="Sala"
                  value=""
                  placeholder="Sala"
                  onChangeText={() => {}}
              />
          </Section>
          {showError()}
          <Section style={{ marginTop: 90, paddingHorizontal: 64 }}>
              {showButton()}
          </Section>
      </Container>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 40
    },
    error: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
});

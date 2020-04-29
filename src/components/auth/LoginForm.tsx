import React from 'react';
import { StyleSheet, Text } from "react-native";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { InputField } from "../shared/InputField";
import { Spinner } from "../shared/Spinner";
import { Button } from "../shared/Button";
import { connect } from "react-redux";
import { AuthState } from "../../types/AuthState";
import { joinToRoom, roomChanged, usernameChanged } from "../../actions";

interface LoginFormProps {
    navigation: any,
    auth: AuthState,
    usernameChanged(): any,
    roomChanged(): any,
    joinToRoom(): any
}

const LoginForm: React.FC<any> = (props) => {
    const showError = () => {
        if (props.auth.error) {
            return <Text style={styles.error}>{props.auth.error}</Text>
        }
        return null;
    };

    const showButton = () => {
        if (props.auth.loading) {
            return <Spinner size="small" />;
        }
        return (
            <Button onPress={onLogin}>
                <Text>Unirse</Text>
            </Button>
        );
    };

    const onLogin = () => {
        const room = { username: props.auth.username, room: props.auth.room };
        props.joinToRoom(room);
        props.navigation.navigate('Chat');
    };

    return (
      <Container>
          <Section>
              <InputField
                  label="Usuario"
                  value={props.auth.username}
                  placeholder="Nombre de usuario"
                  onChangeText={props.usernameChanged}
              />
          </Section>
          <Section>
              <InputField
                  label="Sala"
                  value={props.auth.room}
                  placeholder="Sala"
                  onChangeText={props.roomChanged}
              />
          </Section>
          {showError()}
          <Section style={{ marginTop: 90, paddingHorizontal: 64 }}>
              {showButton()}
          </Section>
      </Container>
    );
};

const mapStateToProps = (state: { auth: AuthState }) => {
    return { auth: state.auth };
};

export default connect(mapStateToProps, {
    usernameChanged,
    roomChanged,
    joinToRoom
})(LoginForm);

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

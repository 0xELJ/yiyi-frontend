import React, { useEffect, useState } from 'react';
import { Text } from "react-native";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { InputField } from "../shared/InputField";
import { Spinner } from "../shared/Spinner";
import { Button } from "../shared/Button";
import { connect } from "react-redux";
import { AuthState } from "../../types/states/AuthState";
import { joinToRoom, roomChanged, usernameChanged } from "../../actions";
import { LoginFormProps } from "../../types/props/LoginFormProps";
import { RequestStatus } from '../../constants/RequestStatus';
import { loginForm } from '../../styles/components/auth/loginForm';

const LoginForm: React.FC<LoginFormProps> = (props) => {
    const [formError, setFormError] = useState<string>('');

    useEffect(() => {
        if (props.auth.status === RequestStatus.SUCCESSFUL) {
            props.navigation.navigate('Chat');
        }
        setFormError('');
    }, [props.auth.status]);

    const showError = () => {
        if (formError) {
            return <Text style={loginForm.error}>{formError}</Text>
        }
        return null;
    };

    const showButton = () => {
        if (props.auth.status === RequestStatus.LOADING) {
            return <Spinner size="small" />;
        }
        return (
            <Button onPress={onLogin}>
                <Text>Unirse</Text>
            </Button>
        );
    };

    const onLogin = () => {
        const user = { username: props.auth.username, room: props.auth.room };
        if (!user.username || !user.room) {
            setFormError('Username and room are required');
            return;
        } else {
            props.joinToRoom(user);
        }
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

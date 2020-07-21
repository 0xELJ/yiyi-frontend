import React, { FC, useEffect } from 'react';
import { Image, SafeAreaView, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AuthState } from '../../types/states/AuthState';
import { connect } from 'react-redux';
import { joinToRoom } from '../../actions';
import { LoginProps } from '../../types/props/LoginProps';
import { RequestStatus } from '../../constants/RequestStatus';
import LoginForm from './LoginForm';
import { LoginData } from '../../types/entities/LoginData';
import { login } from '../../styles/components/auth/login';
import logo from '../../assets/images/logo.png';
import welcomeImg from '../../assets/images/welcome.png';
import { Container } from '../shared/Container';
import { typography } from '../../styles/base/typography';

const Login: FC<LoginProps> = props => {
    useEffect(() => {
        if (props.auth.status === RequestStatus.SUCCESSFUL) {
            props.navigation.navigate('Chat');
        }
    }, [props.auth.status]);

    const handleSubmit = (values: LoginData) => {
        props.joinToRoom(values);
    };

    return (
        <SafeAreaView style={login.safeArea}>
            <KeyboardAwareScrollView>
                <Container>
                    <Image source={logo} style={login.logo} />
                    <Text style={typography.h3}>Messenger made easy</Text>
                    <Image source={welcomeImg} style={login.welcomeImg} />
                    <LoginForm
                        onSubmit={handleSubmit}
                        isSubmitting={props.auth.status === RequestStatus.PENDING}
                    />
                </Container>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

const mapStateToProps = (state: { auth: AuthState }) => {
    return { auth: state.auth };
};

export default connect(mapStateToProps, { joinToRoom })(Login);

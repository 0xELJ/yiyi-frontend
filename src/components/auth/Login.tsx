import React, { FC, useEffect } from 'react';
import { View } from 'react-native';
import { AuthState } from '../../types/states/AuthState';
import { connect } from 'react-redux';
import { joinToRoom } from '../../actions';
import { LoginProps } from '../../types/props/LoginProps';
import { RequestStatus } from '../../constants/RequestStatus';
import LoginForm from './LoginForm';
import { LoginData } from '../../types/entities/LoginData';

const Login: FC<LoginProps> = props => {
    if (props.auth.status === RequestStatus.SUCCESSFUL) {
        props.navigation.navigate('Chat');
    }

    const handleSubmit = (values: LoginData) => {
        props.joinToRoom(values);
    };

    return (
        <View>
            <LoginForm
                onSubmit={handleSubmit}
                isSubmitting={false}
            />
        </View>
    );
};

const mapStateToProps = (state: { auth: AuthState }) => {
    return { auth: state.auth };
};

export default connect(mapStateToProps, { joinToRoom })(Login);

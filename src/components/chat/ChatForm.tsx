import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { chatRoom } from '../../styles/components/chat/chatRoom';
import { InputField } from '../shared/InputField';
import { MaterialIcons } from '@expo/vector-icons';
import { Formik, FormikHelpers } from 'formik';
import { MessageData } from '../../types/entities/MessageData';
import { validateMessage } from '../../utils/validateMessage';

const ChatForm: FC<{ onSubmit(message: MessageData): void; }> = props => {
    const initialValues: MessageData = { message: '' };

    const handleSendMessage = (values: MessageData, { resetForm }: FormikHelpers<MessageData>) => {
        props.onSubmit(values);
        resetForm();
    };

    return (
        <Formik initialValues={initialValues} validate={validateMessage} onSubmit={handleSendMessage}>
            {({ handleSubmit, handleChange, values, handleBlur }) => (
                <>
                    <InputField
                        rounded={true}
                        value={values.message}
                        placeholder="Type a message"
                        onChangeText={handleChange('message')}
                        onBlur={handleBlur('message')}
                    />
                    <TouchableOpacity onPress={() => handleSubmit()} style={chatRoom.button}>
                        <MaterialIcons name="send" size={16} color="white"/>
                    </TouchableOpacity>
                </>
            )}
        </Formik>
    );
};

export default ChatForm;

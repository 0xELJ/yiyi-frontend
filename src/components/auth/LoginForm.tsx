import React from 'react';
import { Text } from "react-native";
import { Formik, FormikHelpers } from 'formik';
import { Section } from "../shared/Section";
import { InputField } from "../shared/InputField";
import { Spinner } from "../shared/Spinner";
import { Button } from "../shared/Button";
import { LoginFormProps } from '../../types/props/LoginFormProps';
import { LoginData } from '../../types/entities/LoginData';
import { validateLogin } from '../../utils/validateLogin';

const LoginForm: React.FC<LoginFormProps> = ({ isSubmitting, onSubmit }) => {
    const initialValues: LoginData = { username: '', room: '' };

    const onLogin = (values: LoginData, { resetForm }: FormikHelpers<LoginData>) => {
        onSubmit(values);
        resetForm();
    };

    const handleChangeText = (value: string, setFieldValue: (field: string, value: any) => any, field: string) => {
        const parsedValue = value.toLowerCase().replace(/ /g,'');
        setFieldValue(field, parsedValue);
    };

    const showButton = (handleSubmit: () => void) => {
        if (isSubmitting) {
            return <Spinner size="small" />;
        }
        return (
            <Button onPress={handleSubmit}>
                <Text>Join</Text>
            </Button>
        );
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onLogin} validate={validateLogin} validateOnBlur={false}>
          {({ handleSubmit, values, setFieldValue, handleBlur, touched, errors }) => (
              <>
                  <Section style={{ marginBottom: 15 }}>
                      <InputField
                          value={values.username}
                          placeholder="Username"
                          onChangeText={value => handleChangeText(value, setFieldValue, 'username')}
                          onBlur={handleBlur('username')}
                          touched={touched.username}
                          error={errors.username}
                      />
                  </Section>
                  <Section style={{ marginBottom: 50 }}>
                      <InputField
                          value={values.room}
                          placeholder="Room"
                          onChangeText={value => handleChangeText(value, setFieldValue, 'room')}
                          onBlur={handleBlur('room')}
                          touched={touched.room}
                          error={errors.room}
                      />
                  </Section>
                  <Section>
                      {showButton(handleSubmit)}
                  </Section>
              </>
          )}
        </Formik>
    );
};

export default LoginForm;

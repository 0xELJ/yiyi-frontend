import React from 'react';
import { Text } from "react-native";
import { Formik, FormikHelpers } from 'formik';
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { InputField } from "../shared/InputField";
import { Spinner } from "../shared/Spinner";
import { Button } from "../shared/Button";
import { LoginFormProps } from '../../types/props/LoginFormProps';
import { LoginData } from '../../types/entities/LoginData';
import { validateLogin } from '../../utils/validateLogin';

const LoginForm: React.FC<LoginFormProps> = ({ isSubmitting, onSubmit }) => {
    const initialValues: LoginData = { username: '', room: '' };

    const showButton = (handleSubmit: () => void) => {
        if (isSubmitting) {
            return <Spinner size="small" />;
        }
        return (
            <Button onPress={handleSubmit}>
                <Text>Unirse</Text>
            </Button>
        );
    };

    const onLogin = (values: LoginData, { resetForm }: FormikHelpers<LoginData>) => {
        onSubmit(values);
        resetForm();
    };

    const handleChangeText = (value: string, setFieldValue: (field: string, value: any) => any, field: string) => {
        const parsedValue = value.toLowerCase().replace(/ /g,'');
        setFieldValue(field, parsedValue);
    };

    return (
      <Container>
          <Formik initialValues={initialValues} onSubmit={onLogin} validate={validateLogin} validateOnBlur={false}>
              {({ handleSubmit, values, setFieldValue, handleBlur, touched, errors }) => (
                  <>
                      <Section>
                          <InputField
                              value={values.username}
                              placeholder="Username"
                              onChangeText={value => handleChangeText(value, setFieldValue, 'username')}
                              onBlur={handleBlur('username')}
                              touched={touched.username}
                              error={errors.username}
                          />
                      </Section>
                      <Section>
                          <InputField
                              value={values.room}
                              placeholder="Room"
                              onChangeText={value => handleChangeText(value, setFieldValue, 'room')}
                              onBlur={handleBlur('room')}
                              touched={touched.room}
                              error={errors.room}
                          />
                      </Section>
                      <Section style={{ marginTop: 90, paddingHorizontal: 64 }}>
                          {showButton(handleSubmit)}
                      </Section>
                  </>
              )}
          </Formik>
      </Container>
    );
};

export default LoginForm;

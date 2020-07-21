export interface InputFieldProps {
    value: string;
    placeholder: string;
    secureTextEntry?: boolean;
    onChangeText(text: string): any;
    onBlur(e: any): void;
    touched?: boolean;
    error?: string;
    rounded?: boolean;
}

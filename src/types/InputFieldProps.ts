export interface InputFieldProps {
    label?: string;
    value: string;
    placeholder: string;
    secureTextEntry?: boolean;
    hideLabel?: boolean;
    onChangeText(text: string): any;
}

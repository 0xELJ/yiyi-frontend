export interface ConfirmModalProps {
    visible: boolean;
    header: string,
    body: string,
    accept: string;
    onAccept(): any;
    onRequestClose?(): any;
}

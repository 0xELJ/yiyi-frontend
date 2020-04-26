export interface ConfirmModalProps {
    visible: boolean;
    onAccept(): any;
    onDecline(): any;
    onRequestClose?(): any;
}

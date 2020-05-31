export interface ConfirmModalState {
    visible: boolean;
    header: string,
    body: string,
    onAccept(): any;
    onClose?(): any;
}

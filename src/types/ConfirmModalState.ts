export interface ConfirmModalState {
    visible: boolean;
    header: string,
    body: string,
    acceptLabel: string;
    onAccept(): any;
    onClose?(): any;
}

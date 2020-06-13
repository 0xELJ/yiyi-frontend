export interface CustomModalState {
    visible: boolean;
    header: string,
    body: string,
    onAccept(): any;
    onClose?(): any;
}

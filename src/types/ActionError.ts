export interface ActionError {
    header: string,
    body: string,
    acceptLabel: string
    onAccept?(): any
}

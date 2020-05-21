export interface AppError {
    header: string,
    body: string,
    onAccept?(): any
}

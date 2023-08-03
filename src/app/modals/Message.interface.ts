export interface Message {
    id?: number,
    content: string,
    isMe: boolean,
    timestamp: Date
}
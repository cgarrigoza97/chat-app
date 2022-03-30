export interface ChatState {
    userId: string;
    activeChat: string | null;
    users: string[];
    messages: string[];
}
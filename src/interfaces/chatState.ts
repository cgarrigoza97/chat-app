import { Message } from './message';
import { User } from './user';

export interface ChatState {
    userId: string;
    activeChat: string | null;
    users: User[];
    messages: Message[];
}
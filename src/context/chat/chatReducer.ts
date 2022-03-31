import { ChatState } from "../../interfaces/chatState";
import { Message } from "../../interfaces/message";
import { User } from "../../interfaces/user";

export type ChatAction = 
    | { type: 'loadUsers'; payload: User[] }
    | { type: 'activateChat'; payload: string }
    | { type: 'sendNewMessage'; payload: Message }
    | { type: 'loadMessages'; payload: Message[] }
    | { type: 'cleanAllMessages'; payload: null }

export const chatReducer = (state: ChatState, action: ChatAction) => {

    switch(action.type) {
        case 'loadUsers':
            return {
                ...state,
                users: action.payload
            }
        
        case 'activateChat':
            return {
                ...state,
                activeChat: action.payload,
            }
        
        case 'sendNewMessage':
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }

        case 'loadMessages':
            return {
                ...state,
                messages: action.payload
            }

        case 'cleanAllMessages':
            return {
                ...state,
                messages: []
            }

        default:
            return state;
    }

}
import { useReducer } from "react";
import { chatReducer } from "./chatReducer";
import { ChatState } from '../../interfaces/chatState';
import { ChatContext } from './ChatContext';
import { Message } from "../../interfaces/message";
import { User } from "../../interfaces/user";

const initialState: ChatState = {
    userId: "",
    activeChat: null,
    messages: [] as Message[],
    users: [] as User[]
}

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const ChatProvider = ({ children } : Props) => {

    const [chatState, dispatch] = useReducer(chatReducer, initialState);    

    return (
        <ChatContext.Provider value={{
            chatState,
            setChatState: dispatch
        }}>
            {children}
        </ChatContext.Provider>
    )
}
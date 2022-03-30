import { useReducer } from "react";
import { chatReducer } from "./chatReducer";
import { ChatState } from '../../interfaces/interfaces';
import { ChatContext } from './ChatContext';

const initialState: ChatState = {
    userId: "",
    activeChat: null,
    messages: [],
    users: []
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
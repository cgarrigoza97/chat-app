import React from 'react';
import { createContext } from "react";
import { ChatState } from "../../interfaces/interfaces";
import { ChatAction } from './chatReducer';

export type ChatContextProps = {
    chatState: ChatState,
    setChatState: React.Dispatch<ChatAction>
}

export const ChatContext = createContext<ChatContextProps>({} as ChatContextProps);
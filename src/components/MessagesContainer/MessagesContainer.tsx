import { BottomChatContent } from '../BottomChatContent/BottomChatContent';
import { ChatMessages } from '../ChatMessages/ChatMessages';
import styles from './MessagesContainer.module.css'

export const MessagesContainer = () => {
    return (
        <div className={styles.messagesContainerWrapper}>
            <ChatMessages />
            <BottomChatContent />
        </div>
    )
}

import styles from './ChatMessages.module.css'
import { MessagesRow } from '../MessagesRow/MessagesRow';

export const ChatMessages = () => {
    return (
        <div className={styles.ChatMessagesContainer}>
            <MessagesRow />
            <MessagesRow isMessageFromUser/>
        </div>
    )
}

import { BottomChatContent } from '../BottomChatContent/BottomChatContent';
import styles from './MessagesContainer.module.css'

export const MessagesContainer = () => {
    return (
        <div className={styles.messagesContainerWrapper}>
            <BottomChatContent />
        </div>
    )
}

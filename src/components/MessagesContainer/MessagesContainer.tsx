import { MessageInputField } from '../MessageInputField/MessageInputField'
import styles from './MessagesContainer.module.css'

export const MessagesContainer = () => {
    return (
        <div className={styles.messagesContainerWrapper}>
            <MessageInputField />
        </div>
    )
}

import styles from './ChatsContainer.module.css'
import { ChatCard } from '../ChatCard/ChatCard';

export const ChatsContainer = () => {

    // TODO: show scrollbar on hover

    return (
        <div className={ styles.chatsContainer }>
            <ChatCard active />
            <ChatCard />
        </div>
    )
}

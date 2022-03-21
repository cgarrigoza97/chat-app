import { border } from '@mui/system'
import styles from './MessageBubble.module.css'
import { MessageBubbleIcon } from '../MessageBubbleIcon/MessageBubbleIcon';

interface Props {
    username?: string,
    message: string, 
    time?: string,
    bubblePosition: 'first' | 'middle' | 'last' | 'unique'
}

export const MessageBubble = ({ bubblePosition = 'first', username, message, time } : Props) => {

    let borderRadius = ""

    switch(bubblePosition) {
        case 'first':
            borderRadius = `${styles.firstBorderRadius}`
            break

        case 'middle':
            borderRadius = `${styles.middleBorderRadius}`
            break

        case 'last':
            borderRadius = `${styles.lastBorderRadius}`
            break

        case 'unique':
            borderRadius = `${styles.uniqueBorderRadius}`
            break
    }

    return (
        <div className={`${styles.messageBuble} ${borderRadius}`}>
            { (bubblePosition === 'first' || bubblePosition === 'unique') &&
                <span className={styles.username}>{username}</span>
            }

            <p className={styles.messageContent}>
                {message}
            </p>

            { (bubblePosition === 'last' || bubblePosition === 'unique') &&
                <>
                    <div className={styles.messageTime}>
                        <span>{time}</span>
                    </div>
                    <div className={styles.bottomCurvedIcon}>
                        <MessageBubbleIcon />
                    </div>
                </>
            }

        </div>
    )
}

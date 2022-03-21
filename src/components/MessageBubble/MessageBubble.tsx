import styles from './MessageBubble.module.css'
import { MessageBubbleIcon } from '../MessageBubbleIcon/MessageBubbleIcon';

interface Props {
    isFromOwnUser?: boolean,
    username?: string,
    message: string, 
    time?: string,
    bubblePosition: 'first' | 'middle' | 'last' | 'unique'
}

export const MessageBubble = ({ isFromOwnUser = false, bubblePosition = 'first', username, message, time } : Props) => {

    let borderRadius = ""

    switch(bubblePosition) {
        case 'first':
            borderRadius = isFromOwnUser ? `${styles.firstBorderRadiusRight}` : `${styles.firstBorderRadiusLeft}`
            break

        case 'middle':
            borderRadius = isFromOwnUser ? `${styles.middleBorderRadiusRight}` : `${styles.middleBorderRadiusLeft}`
            break

        case 'last':
            borderRadius = isFromOwnUser ? `${styles.lastBorderRadiusRight}` : `${styles.lastBorderRadiusLeft}`
            break

        case 'unique':
            borderRadius = isFromOwnUser ? `${styles.uniqueBorderRadiusRight}` : `${styles.uniqueBorderRadiusLeft}`
            break
    }

    const bubbleClasses = isFromOwnUser && `${styles.messageBubleFromUser}`
    const iconPositioning = isFromOwnUser ? `${styles.bottomCurvedIconRight}` : `${styles.bottomCurvedIconLeft}`

    return (
        <div className={`${styles.messageBuble} ${borderRadius} ${bubbleClasses}`}>
            { ((bubblePosition === 'first' || bubblePosition === 'unique') && !isFromOwnUser) &&
                <span className={styles.username}>{username}</span>
            }

            <p className={styles.messageContent}>
                {message}
            </p>

            <div className={styles.messageTime}>
                <span>{time}</span>
            </div>

            { (bubblePosition === 'last' || bubblePosition === 'unique') &&
                <>
                    <div className={`${styles.bottomCurvedIconBase} ${iconPositioning}`}>
                        <MessageBubbleIcon isFromOwnUser={isFromOwnUser} />
                    </div>
                </>
            }

        </div>
    )
}

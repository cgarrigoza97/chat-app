import { MessageBubble } from '../MessageBubble/MessageBubble'
import styles from './MessagesRow.module.css'

interface Props {
    isMessageFromUser?: boolean,
}

export const MessagesRow = ({ isMessageFromUser }: Props) => {

    const alignment = isMessageFromUser ? `${styles.messagesToRight}` : `${styles.messagesToLeft}`

    const messages = [
        {
            username: 'Carlos',
            messages: [
                {
                    text: 'Message 1',
                    time: '20:10' 
                },
                {
                    text: 'Message 2',
                    time: '20:11'
                },
                {
                    text: 'Message 3',
                    time: '20:12'
                }
            ]
        }
    ]

    return (
        <div className={styles.messagesRowWrapper}>
            <div className={`${styles.messagesRowContainer} ${alignment}`}>   
                {   !isMessageFromUser &&
                    <div className={styles.userImageWrapper}>
                        <img src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' alt='icon' />
                    </div>
                }

                <div className={styles.messages}>
                    {
                        messages[0].messages.map((m, i) => {
                            let position : 'first' | 'middle' | 'last' | 'unique' = 'middle'

                            if (i === 0)
                                position = 'first'
                            
                            if (i === messages[0].messages.length - 1)
                                position = 'last'

                            if (i === messages[0].messages.length - 1 && i === 0)
                                position = 'unique'
                    

                            return <MessageBubble
                                isFromOwnUser={isMessageFromUser}
                                bubblePosition={position}
                                message={m.text}
                                time={m.time}
                                username={messages[0].username}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

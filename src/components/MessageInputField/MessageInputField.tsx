import { useRef, useState } from 'react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import styles from './MessageInputField.module.css'
import { MessageInputIconButton } from '../MessageInputIconButton/MessageInputIconButton';
import { MessageBubbleIcon } from '../MessageBubbleIcon/MessageBubbleIcon';


export const MessageInputField = () => {

    const [inputText, setInputText] = useState('')

    const messageInputField = useRef<HTMLDivElement | null>(null)

    const handleClick = () => {
        messageInputField.current?.focus()
    }

    const handleChange = () => {
        setInputText(messageInputField.current?.innerText || '')
    }

    return (
        <div className={styles.MessageInputFieldContainer}>
            <div className={styles.MessageInputBtnWrapper}>
                <MessageInputIconButton icon={SentimentSatisfiedAltIcon} />
            </div>

            <div
                className={styles.MessageInputFieldWrapper}
                onClick={handleClick}
            >
                <div
                    ref={messageInputField}
                    className={styles.MessageInputFieldContentEditable}
                    contentEditable={true}
                    onInput={handleChange}
                ></div>

                {   !inputText &&
                    <div className={`${styles.MessageInputFieldPlaceholderWrapper}`}>
                        <span className={styles.MessageInputFieldPlaceholderColor}>Message</span>
                    </div>}
            </div>
            

            <div className={styles.MessageInputBtnWrapper}>
                <MessageInputIconButton icon={AttachFileIcon} />
            </div>

            <div className={styles.MessageInputFieldIconWrapper}> 
                <MessageBubbleIcon />
            </div>

        </div>
    )
}

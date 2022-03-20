import { useRef, useState } from 'react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { IconButton } from '@mui/material'
import styles from './MessageInputField.module.css'

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
                <IconButton>
                    <SentimentSatisfiedAltIcon style={{ color: 'var(--icon-color-1)' }}/>
                </IconButton>
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
                <IconButton>
                    <AttachFileIcon style={{ color: 'var(--icon-color-1)' }} />
                </IconButton>
            </div>
        </div>
    )
}

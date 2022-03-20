import styles from './BottomChatContent.module.css'
import { MessageInputField } from '../MessageInputField/MessageInputField';
import { RoundedButton } from '../RoundedButton/RoundedButton';
import SendIcon from '@mui/icons-material/Send';

export const BottomChatContent = () => {
    return (
        <div className={styles.bottomChatContentContainer}>
            <div className={styles.inputFieldWrapper}>
                <MessageInputField />
            </div>

            <div className={styles.roundButtonWrapper}>
                <RoundedButton icon={SendIcon} />
            </div>
        </div>
    )
}

import styles from './ChatPage.module.css'
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { MainContent } from '../../components/MainContent/MainContent';

export const ChatPage = () => {
    return (
        <div className={styles.chatPageContainer}>
            <div className={styles.sidebarContainer}>
                <Sidebar />
            </div>

            <div className={styles.contentContainer}>
                <MainContent />
            </div>
        </div>
    )
}

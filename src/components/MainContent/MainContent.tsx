import { Header } from '../Header/Header'
import { MessagesContainer } from '../MessagesContainer/MessagesContainer'
import styles from './MainContent.module.css'


export const MainContent = () => {
    return (
        <div className={ styles.mainContent }>
            <Header />
            <MessagesContainer />
        </div>
    )
}

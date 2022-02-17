import styles from './ChatCard.module.css'

interface Props {
    active?: boolean
}

export const ChatCard = ({ active } : Props) => {
    return (
        <div className={`${styles.chatCardContainer} ${active && styles.chatCardContainerActive}`}> 

            <div className={styles.chatCardImageContainer}>
                <img src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' alt='icon' />
            </div>

            <div className={styles.chatCardBodyContainer}>

                <div className={styles.chatCardBodyHeader}>
                    <h1>Chat Name</h1>

                    <span>18:30</span>
                </div>

                <div className={styles.chatCardBodyContent}>
                    <span>Placeholder for chat</span>
                </div>

            </div>

        </div>
    )
}

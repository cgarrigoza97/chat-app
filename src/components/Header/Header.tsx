import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import styles from  './Header.module.css'


export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerInfoContainer}>
                <div className={styles.headerInfoImgContainer}>
                    <img src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' alt='icon' />
                </div>

                <div className={styles.headerInfoBodyContainer}>
                    <div className={styles.headerInfoBodyHeader}>
                        <h1>Chat Name</h1>
                    </div>
                    <div className={styles.headerInfoBodyContent}>
                        <p>Placeholder for chat</p>
                    </div>
                </div>
            </div>

            <div className={ styles.headerBtnContainer }>
                <IconButton aria-label='search'>
                    <SearchIcon />
                </IconButton>
                
                <IconButton aria-label='more'>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>
    )
}

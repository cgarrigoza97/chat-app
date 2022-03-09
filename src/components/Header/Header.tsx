import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import styles from  './Header.module.css'


export const Header = () => {
    return (
        <div className={ styles.header }>
            <div></div>

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

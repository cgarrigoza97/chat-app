import { Button } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from './ChatCard.module.css'

interface Props {
    active?: boolean
}

// TODO: check how to modify when dark mode is selected
// TODO: change ripple color
const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '0.8rem',
                    height: '4.5rem',
                    backgroundColor: 'transparent',
                    display: 'flex',
                    "&:hover": {
                        backgroundColor: 'var(--light-gray)',
                    },
                    textTransform: 'none'
                }
            },
        },
    }
})

export const ChatCard = ({ active } : Props) => {
    return (
        <ThemeProvider theme={theme}>
            <Button
                className={`${styles.chatCardContainer} ${active && styles.chatCardContainerActive}`}
            >
                <div className={styles.chatCardImageContainer}>
                    <img src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' alt='icon' />
                </div>
                <div className={styles.chatCardBodyContainer}>
                    <div className={styles.chatCardBodyHeader}>
                        <h1>Chat Name</h1>
                        <span>18:30</span>
                    </div>
                    <div className={styles.chatCardBodyContent}>
                        <p>Placeholder for chat</p>
                    </div>
                </div>
            </Button>
        </ThemeProvider>
    )
}

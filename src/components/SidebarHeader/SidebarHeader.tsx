import { InputSearch } from '../InputSearch/InputSearch'
import styles from './SidebarHeader.module.css'

export const SidebarHeader = () => {
    return (
        <div className={styles.sidebarHeader}>
            <div className={styles.btnContainer}>

            </div>

            <div className={styles.inputContainer}>
                <InputSearch />
            </div>
        </div>
    )
}

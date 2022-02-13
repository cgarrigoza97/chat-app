import { InputSearch } from '../InputSearch/InputSearch'
import styles from './SidebarHeader.module.css'

export const SidebarHeader = () => {
    return (
        <div className={styles.SidebarHeader}>
            <InputSearch />
        </div>
    )
}

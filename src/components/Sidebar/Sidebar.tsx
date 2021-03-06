import { ChatsContainer } from '../ChatsContainer/ChatsContainer'
import { SidebarHeader } from '../SidebarHeader/SidebarHeader'
import styles from './Sidebar.module.css'


export const Sidebar = () => {
    return (
        <div className={ styles.sidebar }>
            <SidebarHeader />
            <ChatsContainer />
        </div>
    )
}

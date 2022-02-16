import { CustomButton } from '../CustomButton/CustomButton'
import { InputSearch } from '../InputSearch/InputSearch'
import { IconContext } from 'react-icons';
import { IoMenuOutline } from 'react-icons/io5'
import styles from './SidebarHeader.module.css'

export const SidebarHeader = () => {

    const handleClick = () => {}

    return (
        <div className={styles.sidebarHeader}>
            <div className={styles.btnContainer}>
                <CustomButton onClick={handleClick}>
                    <IconContext.Provider value={{ 
                        size: '1.8em',
                        color: 'rgb(var(--gray-2))' 
                    }}>
                        <IoMenuOutline />
                    </IconContext.Provider>
                </CustomButton>
            </div>

            <div className={styles.inputContainer}>
                <InputSearch />
            </div>
        </div>
    )
}

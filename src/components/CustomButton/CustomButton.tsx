import styles from './CustomButton.module.css'

interface Props {
    onClick: () => void
    children: React.ReactNode
}

export const CustomButton = ({ children, onClick }: Props) => {
    return (
        <div className={styles.customButtonWrapper}>
            <button onClick={onClick}>
                { children }
            </button>
        </div>
    )
}

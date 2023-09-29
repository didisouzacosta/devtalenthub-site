import styles from './page-content.module.css'

export default function PageContent({ children }) {
    return (
        <section className={styles.container}>
            <div className={styles.center}>
            {children}
            </div>
        </section>
    )
}
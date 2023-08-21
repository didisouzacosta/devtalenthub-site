import styles from './home.module.css'

export const metadata = {
    title: 'DevTalent Hub',
    description: 'Find your great oporntunity',
}

export default function HomeLayout({ children }) {
    return (
        <section className={styles.content}>
            {children}
        </section>
    )
}
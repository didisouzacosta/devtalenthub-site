'user client'

import styles from './banner.module.css'

export default function Banner() {
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <span className={styles.span}>
                    <h1 className={styles.title_header}>Job Board for Developers, Designers, and Marketers</h1>
                    <p className={styles.title_description}>Jobs is a curated job board of the best jobs for developers, designers and marketers in the tech industry.</p>
                </span>
            </div>
        </div>
    )
}
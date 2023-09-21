'use client'

import styles from './banner.module.css'

export default function Banner() {
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <span className={styles.span}>
                    <h1 className={styles.title_header}>Made with focus in <br /> Mobile Developers</h1>
                    <p className={styles.title_description}>Dev talent hub is a curated job board of the best jobs for mobile developers.</p>
                </span>
            </div>
        </div>
    )
}
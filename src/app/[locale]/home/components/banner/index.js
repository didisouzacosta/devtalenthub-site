'use client'

import { useTranslations } from 'next-intl';

import styles from './banner.module.css'

export default function Banner() {
    const t = useTranslations('banner');

    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <span className={styles.span}>
                    <h1 className={styles.title_header} dangerouslySetInnerHTML={{__html: t('title')}} />
                    <p className={styles.title_description}>{t('subtitle')}</p>
                </span>
            </div>
        </div>
    )
}
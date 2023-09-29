'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl';

import styles from './footer.module.css'

export default function Footer() {
    const t = useTranslations();
    
    return (
        <div className={styles.center}>
            <footer className={styles.footer}>
                © Copyright DevTalentHub - {t('footer.message')} <Link href="https://nextjs.org" target="_blank" prefetch={false}>NextJS</Link>.
            </footer>
        </div>
    )
}
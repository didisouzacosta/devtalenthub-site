'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl';

import styles from './header.module.css'

export default function Header() {
    const t = useTranslations();

    return (
        <div className={styles.center}>
            <nav className={styles.nav}>
                <Link href="/home" className={styles.brand}>
                    <Image
                        src="/devtalent-hub.png"
                        width={200}
                        height={55}
                        alt="DevTalentHub"
                    />
                </Link>
                <ul role='list'>
                    <li><Link href='/companies'>{t('menu.companies')}</Link></li>
                    <li><Link href="/about-us">{t('menu.about-us')}</Link></li>
                    <li><Link href="/contact">{t('menu.contact')}</Link></li>
                </ul>
            </nav>
        </div>
    )
}
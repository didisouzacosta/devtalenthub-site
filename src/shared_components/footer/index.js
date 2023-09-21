'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl';

import styles from './footer.module.css'

export default function Footer({ languages, levels }) {
    const t = useTranslations();
    
    return (
        <footer className={styles.center}>
            <div className={styles.footer}>
                <nav>
                    <div className={styles.column_wrapper}>
                        <h3>{t('title.pages')}</h3>
                        <ul>
                            <li><Link href='/home'>{t('menu.home')}</Link></li>
                            <li><Link href='/about-us'>{t('menu.about_us')}</Link></li>
                            <li><Link href='/companies'>{t('menu.companies')}</Link></li>
                            <li><Link href='/contact'>{t('menu.contact')}</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column_wrapper}>
                        <h3>{t('title.languages')}</h3>
                        <ul>
                            {
                                languages?.map((language) => (
                                    <li key={language.queryString}>
                                        <Link href={{
                                            pathname: '/search',
                                            query: { language: language.queryString }
                                        }}>
                                            {language.value}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className={styles.column_wrapper}>
                        <h3>{t('title.level')}</h3>
                        <ul>
                            {
                                levels?.map((level) => (
                                    <li key={level.queryString}>
                                        <Link href={{
                                            pathname: '/search',
                                            query: { level: level.queryString }
                                        }}>
                                            {level.value}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className={styles.column_wrapper}>
                        <h3>{t('title.legal')}</h3>
                        <ul>
                            <li><Link href='/privacy-policy'>{t('menu.privacy_policy')}</Link></li>
                            <li><Link href='/cookie-preferences'>{t('menu.cookie_preferences')}</Link></li>
                        </ul>
                    </div>
                </nav>

                <div className={styles.copyright}>
                    © Copyright DevTalentHub - Made with ❤️ for delevelopers using <Link href="https://nextjs.org" target="_blank" prefetch={false}>NextJS</Link>.
                </div>
            </div>
        </footer>
    )
}
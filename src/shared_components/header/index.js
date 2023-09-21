'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl';

import utilStyles from '@/util/styles/util.module.css'
import styles from './header.module.css'
import Card from '../card'

function CategoriesCard({ languages, levels }) {
    const t = useTranslations('title');

    return (
        <div className={styles.categories_card}>
            <Card>
                <div className={styles.columns}>
                    <div>
                        <h3>{t('languages')}</h3>
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

                    <div>
                        <h3>{t('level')}</h3>
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
                </div>
            </Card>
        </div>
    )
}

export default function Header({ levels, languages }) {
    const t = useTranslations('menu');

    return (
        <div className={styles.center}>
            <nav className={styles.nav}>
                <Link href="/home" className={styles.brand}>
                    <Image
                        src="/dev_talent_hub.png"
                        width={200}
                        height={50}
                        alt="DevTalentHub"
                    />
                </Link>
                <ul role='list'>
                    <li><Link href='/companies'>{t('companies')}</Link></li>
                    <li className={styles.categories}>
                        <span>{t('categories')}</span>
                        <CategoriesCard levels={levels} languages={languages} />
                    </li>
                    <li><Link href="/about-us">{t('about_us')}</Link></li>
                    <li><Link href="/contact">{t('contact')}</Link></li>
                </ul>
                <Link href="/post-job" prefetch={true} className={utilStyles.button_primary}>{t('post_a_job')}</Link>
            </nav>
        </div>
    )
}
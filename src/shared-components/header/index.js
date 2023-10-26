'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl';

import styles from './header.module.css'
import PageContent from '../page-content';

export default function Header() {
    const t = useTranslations();

    return (
        <PageContent>
            <header>
                <nav className={styles.nav}>
                    <Link href="/home" className={styles.brand}>
                        <Image
                            src="/devtalent-hub.png"
                            width={200}
                            height={55}
                            alt="DevTalentHub"
                            priority={false}
                        />
                    </Link>
                    <ul role='list'>
                        <li>
                            <Link
                                href="https://www.linkedin.com/company/devtalenthub"
                                prefetch={false}
                                target="_blank"
                            >
                                {t('menu.about-us')}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://github.com/users/didisouzacosta/projects/2"
                                prefetch={false}
                                target="_blank"
                            >
                                {t('menu.planning')}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </PageContent>
    )
}
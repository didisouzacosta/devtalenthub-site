'user client'
import Image from 'next/image'
import Link from 'next/link'

import utilStyles from '@/app/util/styles/util.module.css'
import styles from './header.module.css'
import Card from '../card'

function CategoriesCard({ languages, levels }) {
    return (
        <div className={styles.categories_card}>
            <Card>
                <div className={styles.columns}>
                    <div>
                        <h3>Languages</h3>
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
                        <h3>Level</h3>
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
    return (
        <div className={styles.center}>
            <nav className={styles.nav}>
                <Link href="/home" className={styles.brand}>
                    <Image
                        src="/"
                        width={200}
                        height={50}
                        alt="DevTalentHub"
                    />
                </Link>
                <ul role='list'>
                    <li><Link href="/home">Home</Link></li>
                    <li><Link href='/companies'>Companies</Link></li>
                    <li className={styles.categories}>
                        <span>Categories</span>
                        <CategoriesCard levels={levels} languages={languages} />
                    </li>
                    <li><Link href="/about-us">About us</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
                <Link href="/post-job" prefetch={true} className={utilStyles.button_primary}>Post a job</Link>
            </nav>
        </div>
    )
}
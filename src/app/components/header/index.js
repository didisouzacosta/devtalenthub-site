'user client'
import Image from 'next/image'
import Link from 'next/link'

import utilStyles from '@/app/util/styles/util.module.css'
import styles from './header.module.css'
import Card from '../card'
import { getAllLanguages, getAllLevels } from '@/app/api/vacancy-api'

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
                                    <li>
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
                                    <li>
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
                        src="https://assets.website-files.com/60c77302fcfa2b84ab595f64/60da7a7b304772e2954fe9e4_job-board-x-logo-webflow-template-2.svg"
                        width={200}
                        height={50}
                        alt="DevTalentHub"
                    />
                </Link>
                <ul role='list'>
                    <li><Link href="/home">Home</Link></li>
                    <li><Link href="/about-us">About us</Link></li>
                    <li className={styles.categories}>
                        <span>Categories</span>
                        <CategoriesCard levels={levels} languages={languages} />
                    </li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
                <Link href="/post-job" prefetch={true} className={utilStyles.button_primary}>Post a job</Link>
            </nav>
        </div>
    )
}
'user client'

import Link from 'next/link'

import styles from './footer.module.css'

export default function Footer({ languages, levels }) {
    return (
        <footer className={styles.center}>
            <div className={styles.footer}>
                <nav>
                    <div className={styles.column_wrapper}>
                        <h3>Pages</h3>
                        <ul>
                            <li><Link href='/home'>Home</Link></li>
                            <li><Link href='/about-us'>About us</Link></li>
                            <li><Link href='/companies'>Companies</Link></li>
                            <li><Link href='/contact'>Contact</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column_wrapper}>
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

                    <div className={styles.column_wrapper}>
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

                    <div className={styles.column_wrapper}>
                        <h3>Legal</h3>
                        <ul>
                            <li><Link href='/privacy-policy'>Privacy Policy</Link></li>
                            <li><Link href='/cookie-preferences'>Cookie Preferences</Link></li>
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
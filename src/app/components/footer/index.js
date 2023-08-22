'user client'

import Link from 'next/link'

import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.center}>
            <div className={styles.footer}>
                <nav>
                    <div className={styles.column_wrapper}>
                        <h3>Pages</h3>
                        <ul>
                            <li><Link href='/home'>Home</Link></li>
                            <li><Link href='/about'>About us</Link></li>
                            <li><Link href=''>Categories</Link></li>
                            <li><Link href='/companies'>Companies</Link></li>
                            <li><Link href='/contact'>Contact</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column_wrapper}>
                        <h3>Knowedges</h3>
                        <ul>
                            <li><Link href='/search?knowedge=swift'>Swift</Link></li>
                            <li><Link href='/search?knowedge=swiftui'>SwiftUI</Link></li>
                            <li><Link href='/search?knowedge=kotlin'>Kotlin</Link></li>
                            <li><Link href='/search?knowedge=java'>Java</Link></li>
                            <li><Link href='/search?knowedge=react_native'>React Native</Link></li>
                            <li><Link href='/search?knowedge=flutter'>Flutter</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column_wrapper}>
                        <h3>Level</h3>
                        <ul>
                            <li><Link href='/search?level=junior'>Junior</Link></li>
                            <li><Link href='/search?level=pleno'>Pleno</Link></li>
                            <li><Link href='/search?level=senior'>Senior</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column_wrapper}>
                        <h3>Legal</h3>
                        <ul>
                            <li><Link href=''>Privacy Policy</Link></li>
                            <li><Link href=''>Cookie Preferences</Link></li>
                        </ul>
                    </div>
                </nav>

                <div className={styles.copyright}>
                    © Copyright DevTalentHub - Made with ❤️ using <Link href="https://nextjs.org" target="_blank" prefetch={false}>NextJS</Link> and <Link href="https://strapi.io" target="_blank" prefetch={false}>Strapi</Link>
                </div>
            </div>
        </footer>
    )
}
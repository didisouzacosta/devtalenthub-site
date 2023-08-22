'user client'

import Link from 'next/link'

import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.center}>
            <div className={styles.footer}>
                <div>Newsletter</div>
                <nav>
                    <div className={styles.column_wrapper}>
                        <h3>Pages</h3>
                        <ul>
                            <li><Link href=''>Home</Link></li>
                            <li><Link href=''>About us</Link></li>
                            <li><Link href=''>Categories</Link></li>
                            <li><Link href=''>Companies</Link></li>
                            <li><Link href=''>Contact</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column_wrapper}>
                        <h3>Knowedges</h3>
                        <ul>
                            <li><Link href=''>Swift</Link></li>
                            <li><Link href=''>SwiftUI</Link></li>
                            <li><Link href=''>Kotlin</Link></li>
                            <li><Link href=''>Java</Link></li>
                            <li><Link href=''>React Native</Link></li>
                            <li><Link href=''>Flutter</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column_wrapper}>
                        <h3>Level</h3>
                        <ul>
                            <li><Link href=''>Junior</Link></li>
                            <li><Link href=''>Pleno</Link></li>
                            <li><Link href=''>Senior</Link></li>
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
                    © Copyright DevTalentHub - Made with <Link href="https://nextjs.org" prefetch={false}>NextJS</Link> and <Link href="https://strapi.io" prefetch={false}>Strapi</Link>
                </div>
            </div>
        </footer>
    )
}
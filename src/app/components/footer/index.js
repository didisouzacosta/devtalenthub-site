'user client'

import Link from 'next/link'

import styles from './footer.module.css'

export default function Footer() {
    return (
        <div className={styles.center}>
            <div className={styles.footer}>
                <div>Newsletter</div>
                <nav>
                    <div className={styles.column_wrapper}>
                        <h3>Pages</h3>
                        <ul>
                            <li><a href=''>Home</a></li>
                            <li><a href=''>About us</a></li>
                            <li><a href=''>Categories</a></li>
                            <li><a href=''>Companies</a></li>
                            <li><a href=''>Contact</a></li>
                        </ul>
                    </div>

                    <div className={styles.column_wrapper}>
                        <h3>Knowedges</h3>
                        <ul>
                            <li><a href=''>Swift</a></li>
                            <li><a href=''>SwiftUI</a></li>
                            <li><a href=''>Kotlin</a></li>
                            <li><a href=''>Java</a></li>
                            <li><a href=''>React Native</a></li>
                            <li><a href=''>Flutter</a></li>
                        </ul>
                    </div>

                    <div className={styles.column_wrapper}>
                        <h3>Level</h3>
                        <ul>
                            <li><a href=''>Junior</a></li>
                            <li><a href=''>Pleno</a></li>
                            <li><a href=''>Senior</a></li>
                        </ul>
                    </div>
                </nav>

                <div className={styles.copyright}>
                    © Copyright DevTalentHub - Made with <Link href="https://nextjs.org" prefetch={false}>NextJS</Link> and <Link href="https://strapi.io" prefetch={false}>Strapi</Link>
                </div>
            </div>
        </div>
    )
}
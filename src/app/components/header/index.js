'user client'
import Image from 'next/image'
import Link from 'next/link'

import utilStyles from '@/app/util/styles/util.module.css'
import styles from './header.module.css'

export default function Header() {
    return (
        <div className={styles.center}>
            <nav className={styles.nav}>
                <Link href="/" className={styles.brand}>
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
                    <li>Categories</li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
                <Link href="/post-job" prefetch={true} className={utilStyles.button_primary}>Post a job</Link>
            </nav>
        </div>
    )
}
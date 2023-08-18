'user client'
import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.css'

export default function Header() {
    return (
        <div className={styles.center}>
            <nav className={styles.nav}>
                <Link href="/" className={styles.brand}>
                    <Image src="" alt="DevTalentHub" />
                </Link>
                <ul role='list'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/categories">Categories</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
                <Link href="/job">Post a job</Link>
            </nav>
        </div>
    )
}
'user client'

import styles from './footer.module.css'

export default function Footer() {
    return (
        <div className={styles.center}>
            <div className={styles.footer}>
                <div>
                    <div>
                        Pages
                        <ul>
                            <li><a href=''>Home</a></li>
                            <li><a href=''>About us</a></li>
                            <li><a href=''>Categories</a></li>
                            <li><a href=''>Companies</a></li>
                            <li><a href=''>Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        Knowedges
                        <ul>
                            <li><a href=''>Swift</a></li>
                            <li><a href=''>SwiftUI</a></li>
                            <li><a href=''>Kotlin</a></li>
                            <li><a href=''>Java</a></li>
                            <li><a href=''>React Native</a></li>
                            <li><a href=''>Flutter</a></li>
                        </ul>
                    </div>

                    <div>
                        Level
                        <ul>
                            <li><a href=''>Junior</a></li>
                            <li><a href=''>Pleno</a></li>
                            <li><a href=''>Senior</a></li>
                        </ul>
                    </div>
                </div>

                <div>
                    © Copyright DevTalentHub
                </div>
            </div>
        </div>
    )
}
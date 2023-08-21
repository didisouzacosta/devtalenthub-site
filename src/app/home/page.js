import JobList from '../components/job_list'
import Banner from './components/banner'
import SearchBar from './components/search_bar'

import styles from './home.module.css'

export default function Home() {
    return (
        <>
            <Banner />
            <SearchBar />

            <div className={styles.container}>
                <div className={styles.grid}>
                    <JobList />
                    ads
                </div>
            </div>
        </>
    )
}
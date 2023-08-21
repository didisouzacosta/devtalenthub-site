import Card from '../components/card'
import JobList from '../components/job_list'
import PostJobCard from './components/post-job-card'
import Banner from './components/banner'
import SearchBar from './components/search_bar'

import styles from './home.module.css'
import CompaniesCard from './components/companies-card'

export default function Home() {
    return (
        <>
            <Banner />
            <SearchBar />
            <div className={styles.container}>
                <div className={styles.grid}>
                    <JobList />
                    <div className={styles.advertising}>
                        <div>Ads</div>
                        <PostJobCard />
                        <CompaniesCard />
                    </div>
                </div>
            </div>
        </>
    )
}
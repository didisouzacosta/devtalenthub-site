import JobList from '../components/job_list'
import PostJobCard from './components/post-job-card'
import Banner from './components/banner'
import SearchBar from './components/search_bar'

import styles from './home.module.css'
import CompaniesCard from './components/companies-card'
import Banner300x400 from '../components/ads/300x400'
import Banner970x90 from '../components/ads/970x90'

export default function Home() {
    return (
        <>
            <Banner />
            <SearchBar />
            <div className={styles.ad_container}>
                <Banner970x90 />
            </div>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <JobList />
                    <div className={styles.advertising}>
                        <Banner300x400 />
                        <PostJobCard />
                        <CompaniesCard />
                    </div>
                </div>
            </div>
        </>
    )
}
import JobList from '@/shared_components/job_list'
import CompaniesCard from '../companies-card'
import PageContent from '@/shared_components/page_content'

import { getAllFeatured, getAllLatest, getFeaturedCompanies } from '@/api/job-api'

import styles from './content.module.css'

export default function Content() {
    const featuredJobs = getAllFeatured()
    const latestJobs = getAllLatest()
    const featuredCompanies = getFeaturedCompanies()
    
    return (
        <PageContent>
            <div className={styles.grid}>
                <div className={styles.jobsGroup}>
                    <JobList jobs={featuredJobs} title="title.featured_jobs" />
                    <JobList jobs={latestJobs} title="title.latest_jobs" />
                </div>
                <div className={styles.column}>
                    <CompaniesCard companies={featuredCompanies} />
                </div>
            </div>
        </PageContent>
    )
}
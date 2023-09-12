import JobList from '@/app/components/job_list'
import CompaniesCard from '../companies-card'
import PageContent from '@/app/components/page_content'

import { getAllFeatured, getAllLatest } from '@/api/job-api'

import styles from './content.module.css'

export default function Content() {
    const featuredJobs = getAllFeatured()
    const latestJobs = getAllLatest()
    
    return (
        <PageContent>
            <div className={styles.grid}>
                <div className={styles.jobsGroup}>
                    <JobList jobs={featuredJobs} title="Featured Jobs" />
                    <JobList jobs={latestJobs} title="Latest Jobs" />
                </div>
                <div className={styles.column}>
                    <CompaniesCard />
                </div>
            </div>
        </PageContent>
    )
}
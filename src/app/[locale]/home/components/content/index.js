import JobList from '@/shared-components/job-list'
import PageContent from '@/shared-components/page-content'

import { getAllFeatured, getAllLatest } from '@/api/job-api'

import styles from './content.module.css'

export default function Content() {
    const featuredJobs = getAllFeatured()
    const latestJobs = getAllLatest()
    
    return (
        <PageContent>
            <div className={styles.jobsGroup}>
                <JobList jobs={featuredJobs} title="title.featured-jobs" />
                <JobList jobs={latestJobs} title="title.latest-jobs" />
            </div>
        </PageContent>
    )
}
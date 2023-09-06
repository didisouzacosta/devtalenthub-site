'user client'

import JobList from '@/app/components/job_list'
import Banner300x400 from '@/app/components/ads/300x400'
import CompaniesCard from '../companies-card'
import PageContent from '@/app/components/page_content'

import { getAllFeatured, getAllLatest } from '@/app/api/job-api'

import styles from './content.module.css'

export default function Content() {
    const featuredJobs = getAllFeatured()
    const latestJobs = getAllLatest()
    
    return (
        <PageContent>
            <div className={styles.grid}>
                <div>
                    <JobList jobs={featuredJobs} title="Featured Jobs" />
                    <JobList jobs={latestJobs} title="Latest Jobs" />
                </div>
                <div className={styles.column}>
                    <Banner300x400 />
                    <CompaniesCard />
                </div>
            </div>
        </PageContent>
    )
}
'user client'

import JobList from '@/app/components/job_list'
import Banner300x400 from '@/app/components/ads/300x400'
import PostJobCard from '../post-job-card'
import CompaniesCard from '../companies-card'

import styles from './content.module.css'
import PageContent from '@/app/components/page_content'

export default function Content() {
    return (
        <PageContent>
            <div className={styles.grid}>
                <JobList />
                <div className={styles.column}>
                    <Banner300x400 />
                    <PostJobCard />
                    <CompaniesCard />
                </div>
            </div>
        </PageContent>
    )
}
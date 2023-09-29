import { get } from '@/api/job-api'

import MoreJobs from './components/more_jobs'
import JobDescription from './components/job_description'
import ApplyNowCard from './components/apply_now_card'

import styles from './job.module.css'
import Banner300x400 from '@/shared-components/ads/300x400'

export default function Job({ params: { slug } }) {
    const vacancy = get(slug)

    return (
        <div className={styles.grid}>
            <div className={styles.content}>
                <JobDescription params={ vacancy } />
                <MoreJobs />
            </div>
            <div className={styles.column}>
                <ApplyNowCard vacancy={vacancy} />
                {/* <Banner300x400 /> */}
            </div>
        </div>
    )
}
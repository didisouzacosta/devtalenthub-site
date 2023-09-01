import Link from 'next/link'

import { get } from '@/app/api/vacancy-api'

import Card from '@/app/components/card'
import MoreJobs from './components/more_jobs'
import JobDescription from './components/job_description'

import utilStyles from '@/app/util/styles/util.module.css'
import styles from './job.module.css'
import Banner300x400 from '@/app/components/ads/300x400'

export default function Job({ params: { slug } }) {
    const vacancy = get(slug)

    return (
        <div className={styles.grid}>
            <div className={styles.content}>
                <JobDescription params={ vacancy } />
                <MoreJobs />
            </div>
            <div className={styles.column}>
                <Card>
                    <h3>Apply now</h3>
                    <p>Please let Webflow know that you found this position on our job board, as that is a great way to support us, so we can keep posting cool jobs every day.</p>
                    <Link href="/post-job" prefetch={true} className={utilStyles.button_primary}>Apply now</Link>
                </Card>
                <Banner300x400 />
            </div>
        </div>
    )
}
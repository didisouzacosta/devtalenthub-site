import Link from 'next/link'

import { get } from '@/api/job-api'

import Card from '@/app/components/card'
import MoreJobs from './components/more_jobs'
import JobDescription from './components/job_description'

import utilStyles from '@/util/styles/util.module.css'
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
                    <p>Don`t waste time. Apply yourself and pave the way for the success you deserve.</p>
                    <Link href={ vacancy.frontmatter.apply_url } target="_blank" prefetch={false} className={utilStyles.button_primary}>Apply now</Link>
                </Card>
                {/* <Banner300x400 /> */}
            </div>
        </div>
    )
}
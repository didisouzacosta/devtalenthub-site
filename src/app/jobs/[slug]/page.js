import Card from '@/app/components/card'
import styles from './job.module.css'
import MoreJobs from './components/more_jobs'
import JobDescription from './components/job_description'

export default function Job({ params }) {
    return (
        <div className={styles.grid}>
            <div className={styles.content}>
                <JobDescription params={params} />
                <MoreJobs />
            </div>
            <div className={styles.column}>
                <Card>
                    <h3>Apply now</h3>
                </Card>
            </div>
        </div>
    )
}
'user client'
import Image from 'next/image'
import Link from 'next/link'

import styles from './job_list.module.css'

function JobListItem() {
    return (
        <div className={styles.job_list_item}>
            <div className={styles.company_wrapper}>
                <Image
                    src="https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c7c7ea645b46e9836da40c_icon-4-company-job-board-x-template.svg"
                    className={styles.brand}
                    width={80}
                    height={80}
                    priority="lazy"
                    alt="Google"
                />
                <div>
                    <span><strong>Company name</strong></span>
                    <Link href="" className={styles.company_link}>Company link</Link>
                </div>
            </div>
            <div className={styles.column_wrapper}>
                <p className={styles.title}>Location</p>
                <strong>Remote</strong>
            </div>
            <div className={styles.column_wrapper}>
                <p className={styles.title}>Knowedge</p>
                <strong>Pleno/Senior</strong>
            </div>
            <div className={styles.column_wrapper}>
                <p className={styles.title}>Language</p>
                <strong>Swift</strong>
            </div>
        </div>
    )
}

export default function JobList() {
    return (
        <section className={styles.container}>
            <div className={styles.job_list}>
                <div className={styles.job_list_items}>
                    <h2>Featured jobs</h2>
                    <JobListItem />
                    <JobListItem />
                </div>

                <div className={styles.job_list_items}>
                    <h2>Latest jobs</h2>
                    <JobListItem />
                    <JobListItem />
                    <JobListItem />
                </div>
            </div>
        </section>
    )
}
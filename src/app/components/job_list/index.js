'user client'

import Image from 'next/image'
import Link from 'next/link'

import styles from './job_list.module.css'

function JobListItem({ job, slug }) {
    const frontmatter = job.frontmatter
    const isFeatured = frontmatter.isFeatured

    return (
        <Link
            href={`/jobs/${slug}`}
            prefetch={isFeatured}
            className={`${styles.job_list_item} ${isFeatured ? styles.featured : ''}`}
        >
            <div key={slug} className={styles.company_wrapper}>
                <Image
                    src={frontmatter.brand}
                    className={styles.brand}
                    width={80}
                    height={80}
                    priority="lazy"
                    alt="Google"
                />
                <div>
                    <span className={styles.job_title}><strong>{frontmatter.title}</strong></span>
                    <span className={styles.company_link}>{frontmatter.company}</span>
                </div>
            </div>
            <div className={styles.column_wrapper}>
                <p className={styles.title}>Location</p>
                <strong>{frontmatter.location}</strong>
            </div>
            <div className={styles.column_wrapper}>
                <p className={styles.title}>Level</p>
                <strong>{frontmatter.levels?.join(" / ")}</strong>
            </div>
            <div className={styles.column_wrapper}>
                <p className={styles.title}>Language</p>
                <strong>{frontmatter.languages?.join(" / ")}</strong>
            </div>
        </Link>
    )
}

export default function JobList({ jobs, title }) {
    const jobListItems = jobs?.map((job) => <JobListItem job={job} slug={job.slug} />)

    return (
        <section className={styles.container}>
            <div className={styles.job_list}>
                <div className={styles.job_list_items}>
                    { jobListItems }
                </div>
            </div>
        </section>
    )
}
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl';

import styles from './job_list.module.css'

function JobListItem({ job, slug, key }) {
    const frontmatter = job.frontmatter
    const isFeatured = frontmatter.isFeatured

    return (
        <Link
            href={`/jobs/${slug}`}
            prefetch={isFeatured}
            className={`${styles.job_list_item} ${isFeatured ? styles.featured : ''}`}
        >
            <div key={key} className={styles.company_wrapper}>
                <Image
                    src={frontmatter.brand}
                    className={styles.brand}
                    width={80}
                    height={80}
                    priority="lazy"
                    alt={frontmatter.company}
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
    const t = useTranslations()
    const jobListItems = jobs?.map((job, index) => <JobListItem job={job} slug={job.slug} key={index} />)

    return (
        <section className={styles.container}>
            <div className={styles.job_list}>
                <div className={styles.job_list_items}>
                    { title && <h2>{t(title)}</h2> }
                    { jobListItems }
                </div>
            </div>
        </section>
    )
}
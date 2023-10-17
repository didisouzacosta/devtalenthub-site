'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl';

import styles from './job-list.module.css'

function JobListItem({ job }) {
    const t = useTranslations('job')

    return (
        <Link
            href={`/jobs/${job.slug}`}
            prefetch={true}
            className={`${styles.job_list_item} ${job.isFeatured ? styles.featured : ''}`}
        >
            <div className={styles.company_wrapper}>
                <Image
                    src={job.brand}
                    className={styles.brand}
                    width={80}
                    height={80}
                    priority="lazy"
                    alt={job.company}
                />
                <div>
                    <span className={styles.job_title}><strong>{job.title}</strong></span>
                    <span className={styles.company_link}>{job.company}</span>
                </div>
            </div>
            <div className={styles.column_wrapper}>
                <p className={styles.title}>{t('location')}</p>
                <strong>{job.location}</strong>
            </div>
            <div className={styles.column_wrapper}>
                <p className={styles.title}>{t('level')}</p>
                <strong>{job.levels?.map((level) => t(`level-type.${level.toLowerCase()}`)).join(" / ")}</strong>
            </div>
            <div className={styles.column_wrapper}>
                <p className={styles.title}>{t('language')}</p>
                <strong>{job.languages?.join(" / ")}</strong>
            </div>
            <div className={styles.column_wrapper}>
                <p className={styles.title}>{t('salary')}</p>
                <strong>{job.salary ?? '---'}</strong>
            </div>
        </Link>
    )
}

export default function JobList({ jobs }) {
    const jobListItems = jobs?.map((job, index) => <JobListItem job={job} key={index} />)

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
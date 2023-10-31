'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl';

import styles from './job-list.module.css'
import useSearchJobs from '@/hooks/useSearchJobs'

function JobListItem({ job }) {
    const t = useTranslations('job')
    const isFeatured = job.salary != null

    return (
        <Link
            href={`/jobs/${job.slug}`}
            prefetch={false}
            className={`${styles.job_list_item} ${isFeatured ? styles.featured : ''}`}
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
                <strong>{job.isRemote ? t('remote') : job.location}</strong>
            </div>
            <div className={styles.column_wrapper}>
                <p className={styles.title}>{t('level')}</p>
                <strong>{t(`level-type.${job.level?.toLowerCase()}`)}</strong>
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

export default function JobList({ query }) {
    const { result, resultError, resultIsLoading } = useSearchJobs(query)

    if (resultError) return <div>failed to load</div>
    if (resultIsLoading) return <div>loading...</div>

    return (
        <section className={styles.container}>
            <div className={styles.job_list}>
                <div className={styles.job_list_items}>
                    { result?.map((job, index) => <JobListItem job={job} key={index} />) }
                </div>
            </div>
        </section>
    )
}
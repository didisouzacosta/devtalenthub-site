'use client'

import useSWR from 'swr'
import { getAllJobs } from '@/api/job-api'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl';

import styles from './job-list.module.css'

function JobListItem({ job }) {
    const t = useTranslations('job')
    const isFeatured = job.salary != null

    return (
        <Link
            href={`/jobs/${job.slug}`}
            prefetch={true}
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

export default function JobList() {
    const { data, error, isLoading } = useSWR('getAllJobs', getAllJobs)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    return (
        <section className={styles.container}>
            <div className={styles.job_list}>
                <div className={styles.job_list_items}>
                    { data?.map((job, index) => <JobListItem job={job} key={index} />) }
                </div>
            </div>
        </section>
    )
}
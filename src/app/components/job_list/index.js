'user client'

import Image from 'next/image'
import Link from 'next/link'

import styles from './job_list.module.css'
import { getAll } from '@/app/api/vacancy-api'

function JobListItem({ vacancy, isFeatured }) {
    const frontmatter = vacancy.frontmatter

    return (
        <Link
            href='/jobs/ios-dev-pleno-google'
            prefetch={isFeatured}
            className={`${styles.job_list_item} ${isFeatured ? styles.featured : ''}`}
        >
            <div className={styles.company_wrapper}>
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
                <strong>{frontmatter.level}</strong>
            </div>
            <div className={styles.column_wrapper}>
                <p className={styles.title}>Language</p>
                <strong>{frontmatter.language}</strong>
            </div>
        </Link>
    )
}

export default function JobList() {
    const vacancies = getAll()

    return (
        <section className={styles.container}>
            <div className={styles.job_list}>
                <div className={styles.job_list_items}>
                    <h2>Featured jobs</h2>
                    {/* <JobListItem isFeatured={true} />
                    <JobListItem isFeatured={true} /> */}
                </div>

                <div className={styles.job_list_items}>
                    <h2>Latest jobs</h2>
                    { vacancies.map((vacancy) => <JobListItem vacancy={vacancy} />) }
                </div>
            </div>
        </section>
    )
}
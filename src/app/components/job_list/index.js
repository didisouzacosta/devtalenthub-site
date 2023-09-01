'user client'

import Image from 'next/image'
import Link from 'next/link'

import styles from './job_list.module.css'
import { getAllFeatured, getAllLatest } from '@/app/api/vacancy-api'

function VacancyListItem({ vacancy, slug }) {
    const frontmatter = vacancy.frontmatter
    const isFeatured = frontmatter.isFeatured

    return (
        <Link
            href={`/jobs/${slug}`}
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
                <strong>{frontmatter.levels?.join("/")}</strong>
            </div>
            <div className={styles.column_wrapper}>
                <p className={styles.title}>Language</p>
                <strong>{frontmatter.languages?.join("/")}</strong>
            </div>
        </Link>
    )
}

export default function VacancyList() {
    const allFeatured = getAllFeatured()
    const allLatest = getAllLatest()

    return (
        <section className={styles.container}>
            <div className={styles.job_list}>
                <div className={styles.job_list_items}>
                    <h2>Featured jobs</h2>
                    { allFeatured.map((vacancy) => <VacancyListItem vacancy={vacancy} slug={vacancy.slug} />) }
                </div>

                <div className={styles.job_list_items}>
                    <h2>Latest jobs</h2>
                    { allLatest.map((vacancy) => <VacancyListItem vacancy={vacancy} slug={vacancy.slug} />) }
                </div>
            </div>
        </section>
    )
}
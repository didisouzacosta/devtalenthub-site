'use client'

import Link from 'next/link'
import Image from 'next/image'
import md from 'markdown-it';

import Card from "@/shared_components/card";

import utilStyles from '@/util/styles/util.module.css'
import styles from './job_description.module.css'

export default function JobDescription({ params: { frontmatter, content } }) {
    return (
        <Card>
            <article className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <Image
                            src={frontmatter.brand}
                            className={styles.brand_mobile}
                            width={60}
                            height={60}
                            priority="lazy"
                            alt={frontmatter.company}
                        />
                        <h1>{frontmatter.title}</h1>
                        <Image
                            src={frontmatter.brand}
                            className={styles.brand}
                            width={60}
                            height={60}
                            priority="lazy"
                            alt={frontmatter.company}
                        />
                    </div>
                    <div className={styles.infos}>
                        <div className={styles.column_wrapper}>
                            <p>Location</p>
                            <strong>{frontmatter.location}</strong>
                        </div>
                        <div className={styles.column_wrapper}>
                            <p>Level</p>
                            <strong>{frontmatter.levels?.join(" / ")}</strong>
                        </div>
                        <div className={styles.column_wrapper}>
                            <p>Language</p>
                            <strong>{frontmatter.languages?.join(" / ")}</strong>
                        </div>
                        <div className={styles.column_wrapper}>
                            <p>Salary</p>
                            <strong>{frontmatter.salary ?? '---'}</strong>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Job description</h2>
                    <div className={styles.description} dangerouslySetInnerHTML={{ __html: md().render(content) }} />
                </div>
                <Link href={frontmatter.apply_url} target="_blank" prefetch={false} className={utilStyles.button_primary}>
                    Apply now
                </Link>
            </article>
        </Card>
    )
}
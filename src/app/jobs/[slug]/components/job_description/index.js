import Link from 'next/link'
import Image from 'next/image'
import md from 'markdown-it';

import Card from "@/app/components/card";

import utilStyles from '@/app/util/styles/util.module.css'
import styles from './job_description.module.css'

export default function JobDescription({ params: { slug, frontmatter, content } }) {
    return (
        <Card>
            <article className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <h1>{ frontmatter.title }</h1>
                        <Image
                            src="https://assets.website-files.com/60c77302fcfa2bdb6e595f76/60c7c7ea645b46e9836da40c_icon-4-company-job-board-x-template.svg"
                            className={styles.brand}
                            width={60}
                            height={60}
                            priority="lazy"
                            alt="Google"
                        />
                    </div>
                    <div className={styles.infos}>
                        anything
                    </div>
                </div>
                <div>
                <h2>Job description</h2>
                <div className={styles.description} dangerouslySetInnerHTML={{ __html: md().render(content) }} />
                </div>
                <Link href="/post-job" prefetch={true} className={utilStyles.button_primary}>
                    Apply now
                </Link>
            </article>
        </Card>
    )
}
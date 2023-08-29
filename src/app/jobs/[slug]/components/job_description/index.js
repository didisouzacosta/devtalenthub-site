import Link from 'next/link'
import Image from 'next/image'

import Card from "@/app/components/card";

import utilStyles from '@/app/util/styles/util.module.css'
import styles from './job_description.module.css'

export default function JobDescription({ params }) {
    let vacancy = {
        title: 'iOS Mobile Developer',
        description: '**Lorem ipsum dolor sit amet**, consectetur adipiscing elit. Tellus augue sagittis erat consectetur est. Blandit blandit nec mauris pulvinar. Lectus duis amet tortor, sit tincidunt. Rhoncus tincidunt imperdiet penatibus vitae risus, vitae. Blandit auctor justo nisl massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus dictum ultrices lacus sodales nunc felis eu, consectetur arcu. Vitae nulla scelerisque id pellentesque feugiat vel eu.'
    }

    return (
        <Card>
            <article className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <h1>{vacancy.title}</h1>
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
                <div className={styles.description}>
                    <h3>Job description</h3>
                    <div className={styles.description}>{vacancy.description}</div>
                </div>
                <Link href="/post-job" prefetch={true} className={utilStyles.button_primary}>Apply now</Link>
            </article>
        </Card>
    )
}
import Link from 'next/link'

import Card from "@/app/components/card";

import utilStyles from '@/app/util/styles/util.module.css'
import styles from './job_description.module.css'

export default function JobDescription({ params }) {
    return (
        <Card>
            <h1>Job: {params.slug}</h1>
            <div className={styles.separator} />
            <h3>Job description</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus augue sagittis erat consectetur est. Blandit blandit nec mauris pulvinar. Lectus duis amet tortor, sit tincidunt. Rhoncus tincidunt imperdiet penatibus vitae risus, vitae. Blandit auctor justo nisl massa.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus dictum ultrices lacus sodales nunc felis eu, consectetur arcu. Vitae nulla scelerisque id pellentesque feugiat vel eu.</p>
            <Link href="/post-job" prefetch={true} className={utilStyles.button_primary}>Apply now</Link>
        </Card>
    )
}
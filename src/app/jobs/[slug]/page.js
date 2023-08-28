import styles from './job.module.css'

export default function Job({ params }) {
    return (
        <div className={styles.grid}>
            <h1>Job: {params.slug}</h1>
        </div>
    )
}
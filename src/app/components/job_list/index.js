import styles from './job_list.module.css'

export default function JobList() {
    return (
        <section className={styles.container}>
            <div className={styles.job_list}>
                <h2>Featured jobs</h2>
                <div>
                    <div>Job card</div>
                    <div>Job card</div>
                </div>

                <h2>Latest jobs</h2>
                <div>
                    <div>Job card</div>
                    <div>Job card</div>
                </div>
            </div>
        </section>
    )
}
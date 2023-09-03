import Image from 'next/image'
import Link from 'next/link'

import styles from './companies.module.css'
import { getAllCompanies } from '@/app/api/job-api'

function CompanyListItem({ company }) {
    return (
        <Link
            href={`/jobs/`}
            className={styles.company_list_item}
        >
            <Image
                src={company.brand}
                className={styles.brand}
                width={60}
                height={60}
                priority="lazy"
                alt={company.name}
            />
            <strong>{company.name}</strong>
        </Link>
    )
}

export default function Companies() {
    const companies = getAllCompanies()

    return (
        <div>
            <h1>Companies</h1>
            <div className={styles.companies_list}>
            { companies.map((company) => <CompanyListItem company={company} />) }
            </div>
        </div>
    )
}
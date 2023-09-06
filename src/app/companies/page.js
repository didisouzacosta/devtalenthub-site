import Image from 'next/image'
import Link from 'next/link'

import styles from './companies.module.css'
import { getAllCompanies } from '@/app/api/job-api'

function CompanyListItem({ company, key }) {
    return (
        <Link
            href={{
                pathname: '/search',
                query: { company: company.name }
            }}
            className={styles.company_list_item}
            key={key}
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
            { companies.map((company, index) => <CompanyListItem company={company} key={index} />) }
            </div>
        </div>
    )
}
import Image from 'next/image'
import Link from 'next/link'

import Card from "../../../../../shared_components/card";

import styles from './companies_card.module.css'
import { getFeaturedCompanies } from '@/api/job-api';

function CompanyListItem({ company, key }) {
    return (
        <li key={key} className={styles.list_item}>
            <Link href={{
                pathname: '/search',
                query: { company: company.name }
            }}>
                <Image
                    src={company.brand}
                    className={styles.brand}
                    width={30}
                    height={30}
                    priority="lazy"
                    alt={company.name} />
                {company.name}
            </Link>
        </li>
    )
}

export default function CompaniesCard() {
    const companies = getFeaturedCompanies()

    return (
        <Card>
            <h3>Features companies</h3>
            <p>The best companies for you work.</p>
            <ul className={styles.items}>
                {
                    companies.map((company, index) => {
                        return <CompanyListItem company={company} key={index} />
                    })
                }
            </ul>
        </Card>
    )
}
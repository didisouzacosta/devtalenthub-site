'user client'

import Image from 'next/image'
import Link from 'next/link'

import Card from "../../../components/card";

import styles from './companies_card.module.css'
import { getAllCompanies, getFeaturedCompanies } from '@/app/api/job-api';

function CompanyListItem({ company }) {
    return (
        <li className={styles.list_item}>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed.</p>
            <ul className={styles.items}>
                {
                    companies.map((company) => (
                        <CompanyListItem company={company} />
                    ))
                }
            </ul>
        </Card>
    )
}
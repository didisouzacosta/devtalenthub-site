'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl';

import Card from "../../../../../shared_components/card";

import styles from './companies_card.module.css'

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

export default function CompaniesCard({ companies }) {
    const t = useTranslations()

    return (
        <Card>
            <h3>{t('featured_companies.title')}</h3>
            <p>{t('featured_companies.message')}</p>
            <ul className={styles.items}>
                {
                    companies?.map((company, index) => {
                        return <CompanyListItem company={company} key={index} />
                    })
                }
            </ul>
        </Card>
    )
}
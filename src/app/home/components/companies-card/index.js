'user client'

import Image from 'next/image'

import Card from "../../../components/card";

import styles from './companies_card.module.css'

const CompanyListItem = ({ company }) => {
    <li className={styles.list_item}>
        <Image
            src={company.brand}
            className={styles.brand}
            width={30}
            height={30}
            priority="lazy"
            alt={company.name} />
    </li>
}

export default function CompaniesCard() {
    return (
        <Card>
            <h3>Features companies</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed.</p>
            <ul>
                <li></li>
            </ul>
        </Card>
    )
}
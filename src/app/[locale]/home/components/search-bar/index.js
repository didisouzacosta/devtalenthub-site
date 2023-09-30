'use client'

import { Select } from 'antd';

import styles from './search-bar.module.css'
import Card from '@/shared-components/card';

export default function SearchBar({ levels, languages, companies }) {
    const levelOptions = levels?.map((level) => {
        return { value: level.toLowerCase(), label: level }
    }) ?? []

    const languageOptions = languages?.map((language) => {
        return { value: language.toLowerCase(), label: language }
    }) ?? []

    const companyOptions = companies?.map((company) => {
        return { value: company.name.toLowerCase(), label: company.name }
    }) ?? []

    return (
        <Card className={styles.search_bar}>
            <Select
                defaultValue={levelOptions[0]}
                size="large"
                // onChange={handleChange}
                options={levelOptions}
            />

            <Select
                defaultValue={languageOptions[0]}
                size="large"
                // onChange={handleChange}
                options={languageOptions}
            />

            <Select
                defaultValue={companyOptions[0]}
                size="large"
                // onChange={handleChange}
                options={companyOptions}
            />
        </Card>
    )
}
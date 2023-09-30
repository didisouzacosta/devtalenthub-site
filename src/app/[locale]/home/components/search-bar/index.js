'use client'

// import React, { useState } from 'react';
import { Select } from 'antd';

import styles from './search-bar.module.css'
import Card from '@/shared-components/card';

// const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

export default function SearchBar() {
    // const [selectedItems, setSelectedItems] = useState([]);
    // const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

    return (
        <Card className={styles.search_bar}>
            <Select
                defaultValue="all"
                size="large"
                // onChange={handleChange}
                options={[
                    { value: 'all', label: 'Todos os níveis' },
                    { value: 'junior', label: 'Júnior' },
                    { value: 'pleno', label: 'Pleno' },
                    { value: 'senior', label: 'Sênior' }
                ]}
            />

            <Select
                defaultValue="all"
                size="large"
                // onChange={handleChange}
                options={[
                    { value: 'all', label: 'Qualquer linguagem' },
                    { value: 'swift', label: 'Swift' },
                    { value: 'flutter', label: 'Flutter' },
                    { value: 'react-native', label: 'React Native' },
                    { value: 'kotlin', label: 'Kotlin' },
                ]}
            />

            <Select
                defaultValue="all"
                size="large"
                // onChange={handleChange}
                options={[
                    { value: 'all', label: 'Qualquer empresa' },
                    { value: 'durable', label: 'Durable' },
                    { value: 'picpay', label: 'PicPay' }
                ]}
            />
        </Card>
    )
}
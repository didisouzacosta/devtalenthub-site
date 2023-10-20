'use client'

import { useState } from 'react'
import PageContent from '@/shared-components/page-content';
import { jobSlugfy } from "@/util/slugfy"

import styles from './editor.module.css'
import FormEditor from './components/form';
import FormPreview from './components/preview';
import JobsListEditor from './components/jobs-list';

export default function Editor() {
    const [formValues, setFormValues] = useState({});

    const onValuesChange = (values) => {
        let updatedValues = {...formValues, ...values}
        updatedValues.slug = jobSlugfy(updatedValues)
        setFormValues(updatedValues)
    }

    return (
        <PageContent>
            <div className={styles.grid}>
                <div><JobsListEditor /></div>
                <div><FormEditor onValuesChange={onValuesChange} /></div>
                <div><FormPreview values={formValues} /></div>
            </div>
        </PageContent>
    )
}
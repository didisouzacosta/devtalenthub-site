'use client'

<<<<<<< Updated upstream
import PageContent from '@/shared-components/page-content';
import { useState } from 'react'

export default function Editor() {
    const [value, setValue] = useState("**Hello world!!!**");

    return (
        <PageContent>
            content
        </PageContent>
=======
import { useState } from 'react'
import { message } from 'antd'
import PageContent from '@/shared-components/page-content'
import { jobSlugfy } from "@/util/slugfy"

import styles from './editor.module.css'
import FormEditor from './components/form'
import FormPreview from './components/preview'
import JobsListEditor from './components/jobs-list'
import { saveJob } from '@/api/job-api'

export default function Editor() {
    const key = 'updatable';
    const [messageApi, contextHolder] = message.useMessage();
    const [formValues, setFormValues] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const onValuesChange = (values) => {
        let updatedValues = { ...formValues, ...values }
        updatedValues.slug = jobSlugfy(updatedValues)
        setFormValues(updatedValues)
    }

    const onFinish = async () => {
        setIsLoading(true)

        messageApi.open({
            key,
            type: 'loading',
            content: 'Loading...'
        })

        await saveJob(formValues)
            .then(() => {
                messageApi.open({
                    key,
                    type: 'success',
                    content: 'Saved!',
                    duration: 1
                })
            }).catch(() => {
                messageApi.open({
                    key,
                    type: 'error',
                    content: 'Job save failed!',
                    duration: 1
                })
            })

        setIsLoading(false)
    }

    return (
        <>
            {contextHolder}
            <PageContent>
                <div className={styles.grid}>
                    <div><JobsListEditor /></div>
                    <div><FormEditor isLoading={isLoading} onValuesChange={onValuesChange} onFinish={onFinish} /></div>
                    <div><FormPreview values={formValues} /></div>
                </div>
            </PageContent>
        </>
>>>>>>> Stashed changes
    )
}
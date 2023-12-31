'use client'

import { useState } from 'react'
import { message } from 'antd'
import PageContent from '@/shared-components/page-content'
import { jobSlugfy } from "@/util/slugfy"

import styles from './editor.module.css'
import FormEditor from './components/form'
import FormPreview from './components/preview'
import JobsListEditor from './components/jobs-list'
import { saveJob } from '@/api/job-api'
import useGetAllJobs from '@/hooks/useGetAllJobs'

export default function Editor() {
    const key = 'updatable';
    const [messageApi, contextHolder] = message.useMessage();
    const [formValues, setFormValues] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const { result: jobs, isLoading: isLoadingAllJobs, refresh } = useGetAllJobs()

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
                refresh()
            }).catch((err) => {
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
                    <div><JobsListEditor jobs={jobs} isLoading={isLoadingAllJobs} /></div>
                    <div><FormEditor isLoading={isLoading} onValuesChange={onValuesChange} onFinish={onFinish} /></div>
                    <div><FormPreview values={formValues} /></div>
                </div>
            </PageContent>
        </>
    )
}
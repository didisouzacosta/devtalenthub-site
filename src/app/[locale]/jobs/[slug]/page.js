'use client'

import { getJobBySlug } from '@/api/job-api'

import { useEffect, useState } from 'react';
import Content from './components/content'
import getFile from '@/util/storage';

export default function Job({ params: { slug } }) {
    const [job, setJob] = useState(null)

    const loadData = async () => {
        const job = await getJobBySlug(slug)
        setJob(job)

        await getFile(slug)
    }

    useEffect(
        () => {
            loadData()
        },
        []
    )

    return (
        <Content job={job} />
    )
}
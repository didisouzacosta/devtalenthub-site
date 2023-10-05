'use client'

import { useCallback, useEffect } from 'react';
import SearchBar from './components/search-bar'
import PageContent from '@/shared-components/page-content'
import JobList from '@/shared-components/job-list'

import { getAllJobs } from '@/api/job-api'

export default function Home() {
    const levels = [] //getAllLevels()
    const languages = [] //getAllLanguages()
    const companies = [] //getAllCompanies()
    const jobs = [] //getAllJobs()

    const loadData = async () => {
        const jobs = await getAllJobs()
        console.log(jobs)
    }

    useEffect(
        () => {
            loadData()
        },
        []
    )

    return (
        <PageContent>
            <SearchBar
                levels={levels}
                languages={languages}
                companies={companies}
                onChange={(values) => console.log(values)}
            />
            <JobList jobs={jobs} />
        </PageContent>
    )
}
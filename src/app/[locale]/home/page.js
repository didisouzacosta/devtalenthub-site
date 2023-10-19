'use client'

import { useState } from 'react'

import SearchBar from './components/search-bar'
import PageContent from '@/shared-components/page-content'
import JobList from '@/shared-components/job-list'

export default function Home() {
    const [query, setQuery] = useState({});

    return (
        <PageContent>
            <SearchBar onChange={(query) => setQuery(query)} />
            <JobList query={query} />
        </PageContent>
    )
}
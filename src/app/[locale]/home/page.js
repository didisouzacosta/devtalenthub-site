'use client'

import SearchBar from './components/search-bar'
import PageContent from '@/shared-components/page-content'
import JobList from '@/shared-components/job-list'

export default function Home() {
    const levels = [] //getAllLevels()
    const languages = [] //getAllLanguages()
    const companies = [] //getAllCompanies()

    return (
        <PageContent>
            <SearchBar
                levels={levels}
                languages={languages}
                companies={companies}
                onChange={(values) => console.log(values)}
            />
            <JobList />
        </PageContent>
    )
}
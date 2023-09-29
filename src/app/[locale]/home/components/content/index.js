import JobList from '@/shared-components/job-list'
import PageContent from '@/shared-components/page-content'

import { getAllLatest } from '@/api/job-api'

export default function Content() {
    const jobs = getAllLatest()
    
    return (
        <PageContent>
            <JobList jobs={jobs} />
        </PageContent>
    )
}
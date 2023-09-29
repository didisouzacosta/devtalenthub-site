import JobList from '@/shared-components/job-list'
import PageContent from '@/shared-components/page-content'

import { getAll } from '@/api/job-api'

export default function Content() {
    const jobs = getAll()
    
    return (
        <PageContent>
            <JobList jobs={jobs} />
        </PageContent>
    )
}
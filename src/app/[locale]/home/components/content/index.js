import JobList from '@/shared-components/job-list'

import { getAll } from '@/api/job-api'

export default function Content() {
    const jobs = getAll()
    
    return (
        <JobList jobs={jobs} />
    )
}
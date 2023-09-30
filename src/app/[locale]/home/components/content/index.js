import JobList from '@/shared-components/job-list'

import { getAllJobs } from '@/api/job-api'

export default function Content() {
    const jobs = getAllJobs()
    
    return (
        <JobList jobs={jobs} />
    )
}
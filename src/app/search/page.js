import { find, getAllPublished } from '@/api/job-api'

import JobList from '../components/job_list';

export default function Search({ searchParams }) {
    const jobs = find({ searchParams })

    return (
        <div>
            <h1>Search results</h1>
            <JobList jobs={jobs} />
        </div>
    )
}
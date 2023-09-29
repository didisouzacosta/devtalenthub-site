import { find, getAllPublished } from '@/api/job-api'

import JobList from '../../../shared-components/job-list';

export default function Search({ searchParams }) {
    const jobs = find({ searchParams })

    return (
        <div>
            <h1>Search results</h1>
            <JobList jobs={jobs} />
        </div>
    )
}
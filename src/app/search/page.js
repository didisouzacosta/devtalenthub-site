import JobList from "../components/job_list";

import { getAllPublished } from '@/app/api/job-api'

export default function Search() {
    const jobs = getAllPublished()

    return (
        <div>
            <h1>Search</h1>
            <JobList jobs={jobs} />
        </div>
    )
}
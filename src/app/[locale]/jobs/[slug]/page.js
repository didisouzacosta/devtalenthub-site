import { get } from '@/api/job-api'

import JobDescription from './components/job-description'

export default function Job({ params: { slug } }) {
    const job = get(slug)

    return (
        <JobDescription job={job} />
    )
}
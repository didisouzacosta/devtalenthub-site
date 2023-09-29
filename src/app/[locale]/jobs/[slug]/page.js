import { get } from '@/api/job-api'

import Content from './components/content'

export default function Job({ params: { slug } }) {
    const job = get(slug)

    return (
        <Content job={job} />
    )
}
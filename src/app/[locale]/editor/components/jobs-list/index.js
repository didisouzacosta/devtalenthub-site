'use client'

import { Card } from 'antd';

function ListItem({ job }) {
    return <li>{job.company}</li>
}

export default function JobsListEditor({ jobs, isLoading }) {
    if (isLoading) return <div>loading...</div>

    return (
        <Card title="Jobs list">
            <ul>
            { jobs?.map((item, index) => <ListItem job={item} key={index} />) }
            </ul>           
        </Card>
    )
}
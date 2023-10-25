'use client'

import { Card } from 'antd';

function ListItem({ job }) {
    return <li>{job.title}</li>
}

export default function JobsListEditor({ jobs, isLoading }) {
    return (
        <Card title="Jobs list">
            { isLoading && <div>loading...</div> }
            { !isLoading && 
                <ul>
                { jobs?.map((item, index) => <ListItem job={item} key={index} />) }
                </ul>
            }
        </Card>
    )
}
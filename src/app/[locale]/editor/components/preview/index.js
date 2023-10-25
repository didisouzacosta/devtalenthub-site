'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, Space } from 'antd';
import ReactMarkdown from "react-markdown";

import styles from './preview.module.css'

export default function FormPreview({ values }) {
    const infos = [
        {label: 'Slug', value: values.slug},
        {label: 'Title', value: values.title},
        {label: 'Company', value: values.company},
        {label: 'Level', value: values.level},
        {label: 'Languages', value: values.languages?.join(', ')}
    ]

    return (
        <Card title="Preview">
            { values.brand && 
                <p>
                    <Image
                        src={values.brand}
                        alt={values.title}
                        width={80}
                        height={80}
                        priority="lazy"
                        className={styles.brand}
                    />
                </p>
            }
            <Space direction="vertical" style={{ width: '100%' }}>
                { infos.map((item, index) => <p key={index}><strong>{item.label}</strong><br/> {item.value ?? '---'}</p>) }
                { values.description && <ReactMarkdown>{values.description}</ReactMarkdown> }
                { values.apply_url &&
                    <p>
                        <Link href={values.apply_url}>Apply URL</Link>
                    </p>
                }
            </Space>
        </Card>
    )
}
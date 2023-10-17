'use client'

import Link from 'next/link'
import Image from 'next/image'
import Markdown from 'react-markdown'
import { useTranslations } from 'next-intl';
import { Breadcrumb } from 'antd';

import Card from "@/shared-components/card";

import utilStyles from '@/util/styles/util.module.css'
import styles from './content.module.css'

function Loading() {
    return (
        <Card>Carregando...</Card>
    )
}

function Content({ job }) {
    const t = useTranslations()
    
    return (
        <>
            <Breadcrumb
                className={styles.breadcrumb}
                items={[
                    {
                        title: 'Home',
                    },
                    {
                        title: 'Jobs',
                    },
                    {
                        title: job.title,
                    }
                ]}
            />
            <Card>
                <article className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            <Image
                                src={job.brand}
                                className={styles.brand_mobile}
                                width={60}
                                height={60}
                                priority="lazy"
                                alt={job.company}
                            />
                            <h1>{job.title}</h1>
                            <Image
                                src={job.brand}
                                className={styles.brand}
                                width={60}
                                height={60}
                                priority="lazy"
                                alt={job.company}
                            />
                        </div>
                        <div className={styles.infos}>
                            <div className={styles.column_wrapper}>
                                <p>{t('job.location')}</p>
                                <strong>{job.location}</strong>
                            </div>
                            <div className={styles.column_wrapper}>
                                <p>{t('job.level')}</p>
                                <strong>{job.levels?.map((level) => t(`job.level-type.${level.toLowerCase()}`)).join(" / ")}</strong>
                            </div>
                            <div className={styles.column_wrapper}>
                                <p>{t('job.language')}</p>
                                <strong>{job.languages?.join(" / ")}</strong>
                            </div>
                            <div className={styles.column_wrapper}>
                                <p>{t('job.salary')}</p>
                                <strong>{job.salary ?? '---'}</strong>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>{t('job.description')}</h2>
                        <div className={styles.description} dangerouslySetInnerHTML={{ __html: job.content }} />
                    </div>
                    <Link href={job.apply_url} target="_blank" prefetch={false} className={utilStyles.button_primary}>
                        {t('action.apply-now')}
                    </Link>
                </article>
            </Card>
        </>
    )
}

export default function ({ job }) {
    return (
        <>
        {job !== null ? <Content job={job} /> : <Loading />}
        </>
    )
}
'use client'

import useSWR from 'swr'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl';
import { Breadcrumb } from 'antd';

import { getJobBySlug } from '@/api/job-api'
import Card from "@/shared-components/card";

import utilStyles from '@/util/styles/util.module.css'
import styles from './page.module.css'

export default function Job({ params: { slug } }) {
    const t = useTranslations()
    const { data, error, isLoading } = useSWR(slug, getJobBySlug)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    
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
                        title: data.title,
                    }
                ]}
            />
            <Card>
                <article className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            <Image
                                src={data.brand}
                                className={styles.brand_mobile}
                                width={60}
                                height={60}
                                priority="lazy"
                                alt={data.company}
                            />
                            <h1>{data.title}</h1>
                            <Image
                                src={data.brand}
                                className={styles.brand}
                                width={60}
                                height={60}
                                priority="lazy"
                                alt={data.company}
                            />
                        </div>
                        <div className={styles.infos}>
                            <div className={styles.column_wrapper}>
                                <p>{t('job.location')}</p>
                                <strong>{data.location}</strong>
                            </div>
                            <div className={styles.column_wrapper}>
                                <p>{t('job.level')}</p>
                                <strong>{t(`job.level-type.${data.level?.toLowerCase()}`)}</strong>
                            </div>
                            <div className={styles.column_wrapper}>
                                <p>{t('job.language')}</p>
                                <strong>{data.languages?.join(" / ")}</strong>
                            </div>
                            <div className={styles.column_wrapper}>
                                <p>{t('job.salary')}</p>
                                <strong>{data.salary ?? '---'}</strong>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>{t('job.description')}</h2>
                        <div className={styles.description} dangerouslySetInnerHTML={{ __html: ''}} />
                    </div>
                    <Link href={data.apply_url} target="_blank" prefetch={false} className={utilStyles.button_primary}>
                        {t('action.apply-now')}
                    </Link>
                </article>
            </Card>
        </>
    )
}

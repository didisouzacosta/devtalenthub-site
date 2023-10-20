'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl';
import { Breadcrumb } from 'antd';

import Card from "@/shared-components/card";

import utilStyles from '@/util/styles/util.module.css'
import styles from './page.module.css'
import useJob from '@/hooks/useJob';

export default function Job({ params: { slug } }) {
    const t = useTranslations()
    const { job, error, isLoading } = useJob(slug)

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
                                <strong>{job.isRemote ? t('job.remote') : job.location}</strong>
                            </div>
                            <div className={styles.column_wrapper}>
                                <p>{t('job.level')}</p>
                                <strong>{t(`job.level-type.${job.level?.toLowerCase()}`)}</strong>
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
                        <div className={styles.description} dangerouslySetInnerHTML={{ __html: ''}} />
                    </div>
                    <Link href={job.apply_url} target="_blank" prefetch={false} className={utilStyles.button_primary}>
                        {t('action.apply-now')}
                    </Link>
                </article>
            </Card>
        </>
    )
}

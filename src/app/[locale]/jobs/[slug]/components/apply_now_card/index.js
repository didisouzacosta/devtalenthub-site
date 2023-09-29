'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl';

import Card from "@/shared-components/card";

import utilStyles from '@/util/styles/util.module.css'

export default function ApplyNowCard({ vacancy }) {
    const t = useTranslations()

    return (
        <Card>
            <h3>{t('apply.title')}</h3>
            <p>{t('apply.message')}</p>
            <Link href={ vacancy.frontmatter.apply_url } target="_blank" prefetch={false} className={utilStyles.button_primary}>{t('action.apply_now')}</Link>
        </Card>
    )
}
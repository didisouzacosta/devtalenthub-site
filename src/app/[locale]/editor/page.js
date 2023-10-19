'use client'

import PageContent from '@/shared-components/page-content';
import { useState } from 'react'

export default function Editor() {
    const [value, setValue] = useState("**Hello world!!!**");

    return (
        <PageContent>
            content
        </PageContent>
    )
}
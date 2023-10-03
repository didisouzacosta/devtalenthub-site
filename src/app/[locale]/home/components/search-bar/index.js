'use client'

import { useCallback } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { Select, Switch, Form } from 'antd';

import styles from './search-bar.module.css'
import Card from '@/shared-components/card';

export default function SearchBar({ levels, languages, companies }) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const levelOptions = [{ value: 'all', label: 'Todos os níveis' }].concat(
        levels?.map((level) => {
            return { value: level.toLowerCase(), label: level }
        }) ?? []
    )

    const languageOptions = [{ value: 'all', label: 'Todos as linguagens' }].concat(
        languages?.map((language) => {
            return { value: language.toLowerCase(), label: language }
        }) ?? []
    )

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const selectedLevel = searchParams.get('level') ?? languageOptions[0].value
    const selectedLanguage = searchParams.get('language') ?? languageOptions[0].value
    const onlyRemote = searchParams.get('onlyRemote') ?? 'true'

    console.log(onlyRemote)

    function search(key, value) {
        router.push(pathname + '?' + createQueryString(key, value))
    }

    function levelOnChange(value) {
        search('level', value)
    }

    function languageOnChange(value) {
        search('language', value)
    }

    function onlyRemoteOnChange(value) {
        search('onlyRemote', value)
    }

    return (
        <Card className={styles.search_bar}>
            <Form 
                className={styles.form}
                layout="vertical"
            >
                <Select
                    name='level'
                    defaultValue={selectedLevel}
                    size="large"
                    onChange={levelOnChange}
                    options={levelOptions}
                />

                <Select
                    name='language'
                    defaultValue={selectedLanguage}
                    size="large"
                    onChange={languageOnChange}
                    options={languageOptions}
                />

                <div>
                    <Switch
                        name='onlyRemote'
                        onChange={onlyRemoteOnChange}
                        defaultChecked={onlyRemote === 'true'}
                    /> Only remote jobs
                </div>
            </Form>
        </Card>
    )
}
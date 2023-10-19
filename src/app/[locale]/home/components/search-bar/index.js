'use client'

import { useCallback, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { Select, Switch, Form } from 'antd';

import styles from './search-bar.module.css'
import Card from '@/shared-components/card';
import useLevels from '@/hooks/useLevels';
import useLanguages from '@/hooks/useLaguages';

export default function SearchBar({ onChange }) {
    const { levels, levelsIsLoading } = useLevels()
    const { languages, languagesIsLoading } = useLanguages()

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

    const level = searchParams.get('level') ?? languageOptions[0].value
    const language = searchParams.get('language') ?? languageOptions[0].value
    const onlyRemote = searchParams.get('onlyRemote') ?? 'true'

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)
            return params.toString()
        },
        [searchParams]
    )

    useEffect(() => {
        if (onChange) {
            onChange({
                level,
                language,
                onlyRemote
            })
        }
    }, [createQueryString])

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
                    defaultValue={level}
                    size="large"
                    onChange={levelOnChange}
                    options={levelOptions}
                    disabled={levelsIsLoading}
                />

                <Select
                    name='language'
                    defaultValue={language}
                    size="large"
                    onChange={languageOnChange}
                    options={languageOptions}
                    disabled={languagesIsLoading}
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
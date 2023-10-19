import useSWR from 'swr'
import { getLanguages } from '@/api/job-api'

export default function useLanguages() {
    const { data, error, isLoading } = useSWR('languages', getLanguages)
    return {
        languages: data,
        languagesError: error,
        languagesIsLoading: isLoading
    }
}

import useSWR from 'swr'
import { searchJobs } from '@/api/job-api'

export default function useSearch(params) {
    const { data, error, isLoading } = useSWR(params, searchJobs)
    return {
        result: data,
        resultError: error,
        resultIsLoading: isLoading
    }
}

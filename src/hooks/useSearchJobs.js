import useSWR from 'swr'
import { searchJobs } from '@/api/job-api'

export default function useSearchJobs(params) {
    const { data, error, isLoading } = useSWR(params, searchJobs)

    return {
        result: data,
        resultError: error,
        resultIsLoading: isLoading
    }
}

import useSWR, { useSWRConfig } from 'swr'
import { getAllJobs } from '@/api/job-api'

export default function useGetAllJobs() {
    const { mutate } = useSWRConfig()

    const refresh = () => mutate('getAllJobs')

    const { data, error, isLoading } = useSWR('getAllJobs', getAllJobs)
    return {
        result: data,
        resultError: error,
        resultIsLoading: isLoading,
        refresh
    }
}

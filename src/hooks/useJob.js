import useSWR from 'swr'
import { getJobBySlug } from '@/api/job-api'

export default function useJob(slug) {
    const { data, error, isLoading } = useSWR(slug, getJobBySlug)
    return {
        job: data,
        error,
        isLoading
    }
}

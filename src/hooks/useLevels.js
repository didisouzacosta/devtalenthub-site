import useSWR from 'swr'
import { getLevels } from '@/api/job-api'

export default function useLevels() {
    const { data, error, isLoading } = useSWR('levels', getLevels)
    return {
        levels: data,
        levelsError: error,
        levelsIsLoading: isLoading
    }
}

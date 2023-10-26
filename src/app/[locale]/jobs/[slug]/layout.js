import { getJobBySlug } from "@/api/job-api"
import PageContent from "@/shared-components/page-content"

export async function generateMetadata({ params: { slug } }) {
    const job = await getJobBySlug(slug)

    return {
        title: job.title,
        description: job.description,
    }
}

export default function JobLayout({ children }) {
    return (
        <PageContent>
            {children}
        </PageContent>
    )
}
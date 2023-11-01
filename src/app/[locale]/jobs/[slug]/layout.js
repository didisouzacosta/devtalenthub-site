import { getJobBySlug } from "@/api/job-api"
import PageContent from "@/shared-components/page-content"

export async function generateMetadata({ params: { slug } }, parent) {
    const job = await getJobBySlug(slug)
    const title = `${job.title} - ${job.company}`
    const description = job.description

    const previous = await parent

    const openGraph = {
        ...previous.openGraph,
        title,
        description
    }

    return {
        title,
        description,
        openGraph
    }
}

export default function JobLayout({ children }) {
    return (
        <PageContent>
            {children}
        </PageContent>
    )
}
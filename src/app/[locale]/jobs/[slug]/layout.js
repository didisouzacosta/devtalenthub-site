import { getJobBySlug } from "@/api/job-api"
import PageContent from "@/shared-components/page-content"

export async function generateMetadata({ params: { slug } }) {
    const job = await getJobBySlug(slug)
    const title = `${job.title} - ${job.company}`
    const description = job.description

    return {
        title,
        // description,
        openGraph: {
            title,
            // description
        }
    }
}

export default function JobLayout({ children }) {
    return (
        <PageContent>
            {children}
        </PageContent>
    )
}
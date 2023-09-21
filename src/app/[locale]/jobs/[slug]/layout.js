import { get } from "@/api/job-api"
import PageContent from "@/shared_components/page_content"

export async function generateMetadata({ params: { slug } }) {
    let { frontmatter } = get(slug)

    return {
        title: frontmatter.title,
        description: frontmatter.description,
    }
}

export default function JobLayout({ children }) {
    return (
        <PageContent>
            {children}
        </PageContent>
    )
}
import { get } from "@/app/api/vacancy-api"
import PageContent from "@/app/components/page_content"

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
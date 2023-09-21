import PageContent from "../../../shared_components/page_content"

export const metadata = {
    title: 'Post a job',
    description: 'Think a little bit more about us',
}

export default function PostJobLayout({ children }) {
    return (
        <PageContent>
            {children}
        </PageContent>
    )
}
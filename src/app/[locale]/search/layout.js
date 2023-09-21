import PageContent from "../../../shared_components/page_content"

export const metadata = {
    title: 'Search',
    description: 'Find your next opportunity',
}

export default function SearchLayout({ children }) {
    return (
        <PageContent>
            {children}
        </PageContent>
    )
}
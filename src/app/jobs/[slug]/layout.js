import PageContent from "@/app/components/page_content"

export const metadata = {
    title: 'Job',
    description: 'Your new job is here',
}

export default function JobLayout({ children }) {
    return (
        <PageContent>
            {children}
        </PageContent>
    )
}
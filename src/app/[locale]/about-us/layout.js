import PageContent from "@/shared_components/page_content"

export const metadata = {
    title: 'About Us',
    description: 'Think a little bit more about us',
}

export default function AboutLayout({ children }) {
    return (
        <PageContent>
            {children}
        </PageContent>
    )
}
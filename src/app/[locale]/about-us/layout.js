import PageContent from "@/shared-components/page-content"

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
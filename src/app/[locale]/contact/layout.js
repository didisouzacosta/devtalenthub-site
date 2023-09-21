import PageContent from "../../../shared_components/page_content"

export const metadata = {
    title: 'Contact',
    description: 'Think a little bit more about us',
}

export default function ContactLayout({ children }) {
    return (
        <PageContent>
            {children}
        </PageContent>
    )
}
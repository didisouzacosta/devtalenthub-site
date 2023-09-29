import PageContent from "../../../shared-components/page-content"

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
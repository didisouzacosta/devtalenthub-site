import PageContent from "../components/page_content"

export const metadata = {
    title: 'Privacy Policy',
    description: 'Our privacy policy about our content',
}

export default function PrivacyPolicy({ children }) {
    return (
        <PageContent>
            {children}
        </PageContent>
    )
}
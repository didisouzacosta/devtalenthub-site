import PageContent from "../../../shared-components/page-content"

export const metadata = {
    title: 'Companies',
    description: 'Look who is with us',
}

export default function CompaniesLayout({ children }) {
    return (
        <PageContent>
            {children}
        </PageContent>
    )
}
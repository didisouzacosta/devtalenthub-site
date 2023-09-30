import SearchBar from './components/search-bar'
import Content from './components/content'
import PageContent from '@/shared-components/page-content'
import { getAllCompanies, getAllLanguages, getAllLevels } from '@/api/job-api'

export default function Home() {
    const levels = getAllLevels()
    const languages = getAllLanguages()
    const companies = getAllCompanies()

    return (
        <PageContent>
            <SearchBar levels={levels} languages={languages} companies={companies} />
            <Content />
        </PageContent>
    )
}
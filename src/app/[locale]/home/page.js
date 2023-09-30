import SearchBar from './components/search-bar'
import Content from './components/content'
import PageContent from '@/shared-components/page-content'

export default function Home() {
    return (
        <PageContent>
            <SearchBar />
            <Content />
        </PageContent>
    )
}
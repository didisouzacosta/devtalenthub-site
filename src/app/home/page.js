import Banner from './components/banner'
import SearchBar from './components/search_bar'
import Banner970x90 from '../components/ads/970x90'
import Content from './components/content'

export default function Home() {
    return (
        <>
            <Banner />
            <SearchBar />
            <Banner970x90 />
            <Content />
        </>
    )
}
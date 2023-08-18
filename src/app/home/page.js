import JobList from '../components/job_list'
import Banner from './components/banner'
import SearchBar from './components/search_bar'

export default function Home() {
    return (
        <section>
            <Banner />
            <SearchBar />
            <JobList />
        </section>
    )
}
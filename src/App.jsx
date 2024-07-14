import Navbar from "./componets/Navbar"
import Header from "./componets/Navbar/Header"
import SearchBar from "./componets/Navbar/Header/Searchbar"
import JobCard from "./componets/Navbar/Header/Searchbar/Jobcard"
import jobData from "./JobDummyData"
function App() {
 

  return (
  <div>
    <Navbar />
    <Header />
    <SearchBar />
    {jobData.map((job) => (
      <JobCard key={job.id} job={job}/>
    ))}

  </div>
  )
}

export default App

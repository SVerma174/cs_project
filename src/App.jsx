import Navbar from "./componets/Navbar";
import Header from "./componets/Header";
import SearchBar from "./componets/Searchbar";
import JobCard from "./componets/Jobcard";
import jobData from "./JobDummyData";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar />
      {jobData.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default App;

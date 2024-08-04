import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/Searchbar";
import JobCard from "./components/Jobcard";
import jobData from "./JobDummyData";
import UserLogin from "./components/UserLogin";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar />
      {jobData.map((job) => (
        <JobCard {...job} />
      ))}
      <UserLogin />
    </div>
  );
}

export default App;

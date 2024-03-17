import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [jobs, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          "https://links.api.jobtechdev.se/joblinks?q=utvecklare stockholm"
        );
        const data = await response.json();
        console.log(data.hits);
        setPosts(data.hits);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching");
      }
    };
    fetchPost();
  }, []); //Dependency array

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const searched = jobs.filter((job) =>
    job.headline.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <Search onSearch={handleChange} searchTerm={searchTerm} />
      <main>
        {isLoading && <div>Loading...</div>}
        <List jobs={searched} />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header>
      <h1>Jobchaser</h1>
    </header>
  );
}

function List({ jobs }) {
  return (
    <ul>
      {jobs.map((job) => (
        <li className="card" key={job.id}>
          <h2 className="card-title">{job.headline}</h2>
          <div className="card-info">
            <p>{job.workplace_addresses[0].municipality}</p>
            <p>{job.occupation_field.label}</p>
          </div>
          <p className="employer">{job.employer.name}</p>
        </li>
      ))}
    </ul>
  );
}

function Search(props) {
  return (
    <form className="search">
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        onChange={props.onSearch}
        value={props.searchTerm}
      />
      <button id="search-button">Search</button>
    </form>
  );
}

function Footer() {
  return (
    <footer>
      <p>jobchaser.se</p>
    </footer>
  );
}

export default App;

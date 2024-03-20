import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
} from "react-router-dom";
import "./App.css";
import List from "./List";
import Search from "./Search";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import SavedJobsPage from "./components/SavedJobsPage";

function ProtectedRoute() {
  const isAuthenticated = false;
  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
}

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
        //console.log(data.hits);
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
      <BrowserRouter>
        <Header />
        <Search onSearch={handleChange} searchTerm={searchTerm} />
        <main>
          {isLoading && <div>Loading...</div>}
          <Routes>
            <Route path="/" element={<List jobs={searched} />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/savedjobs" element={<ProtectedRoute />}>
              <Route path="/savedjobs" element={<SavedJobsPage />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

function Header() {
  const handleSignOut = () => {};
  return (
    <header>
      <h1>Jobchaser</h1>
      <nav>
        <ul>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <button onClick={handleSignOut}>Sign Out</button>
        </ul>
      </nav>
    </header>
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

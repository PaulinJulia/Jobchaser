import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import "./App.css";
import List from "./components/List";
import Search from "./components/Search";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import SavedJobsPage from "./components/SavedJobsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function ProtectedRoute() {
  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext && authContext.user !== null;
  console.log("isAuthenticated ", isAuthenticated);
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

  const searched = jobs.filter(
    (job) =>
      job.headline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.workplace_addresses[0].municipality
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      job.brief.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // const showSearch =
  //   location.pathname !== "/signin" && location.pathname !== "/signup";

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Search onSearch={handleChange} searchTerm={searchTerm} />
                {isLoading && (
                  <div className="text-center">Loading...</div>
                )}{" "}
                <List jobs={searched} />
              </>
            }
          />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/savedjobs" element={<ProtectedRoute />}>
            <Route path="/savedjobs" element={<SavedJobsPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

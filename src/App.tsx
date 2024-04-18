import { useState, useEffect, ChangeEvent } from "react";
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
import Category from "./components/Category";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Job } from "./types/types";
import { fetchAds } from "./store/slices/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";

function ProtectedRoute() {
  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext && authContext.user !== null;
  console.log("isAuthenticated ", isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
}

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { jobs, position } = useSelector((state: RootState) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchAds(position)).then(()=> {
      setIsLoading(false)
    });
  }, [position]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const searched: Job[] = jobs.filter(
    (job) =>
      job.headline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.workplace_addresses[0].municipality
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      job.brief.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                <Category />
                {isLoading && (
                  <div className="text-center p-5">Loading...</div>
                )}
                {!isLoading &&<List jobs={searched} />}
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

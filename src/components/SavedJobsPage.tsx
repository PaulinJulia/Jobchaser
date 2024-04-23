import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useState, useEffect } from "react";
import List from "./List";

function SavedJobsPage() {
  const navigate = useNavigate();
  const [favoriteJobsList, setfavoriteJobsList] = useState([]);

  useEffect(() => {
    let storedFavoritesData = localStorage.getItem("favoriteJobs");
    if (storedFavoritesData) {
      const linkDataArray = JSON.parse(storedFavoritesData);
      setfavoriteJobsList(linkDataArray);
    }
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully");
        // Additional actions after sign out, such as redirecting to another page
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <button
          className="bg-purple-500 hover:bg-purple-700 w-40 rounded-md font-semibold text-gray p-2 m-4"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
        <h1 className="flex justify-center font-semibold">Saved jobs</h1>
        <List jobs={favoriteJobsList} />
      </div>
    </div>
  );
}

export default SavedJobsPage;

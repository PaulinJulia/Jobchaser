import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useState, useEffect } from "react";
import CardItem from "./CardItem";
import { Job } from "../types/types";

function SavedJobsPage() {
  const navigate = useNavigate();
  const [favoriteJobsList, setfavoriteJobsList] = useState<Job[]>([]);

  const onToggleButton = (id: string) => {
    const updatedJobsList = favoriteJobsList.map((item) =>
      item.id === id ? { ...item, favorite: !item.favorite } : item
    );
    const favoriteAds = updatedJobsList.filter(
      (item) => item.favorite === true
    );
    setfavoriteJobsList(favoriteAds);
    localStorage.setItem("favoriteJobs", JSON.stringify(favoriteAds));
  };

  useEffect(() => {
    try {
      let storedFavoriteData = localStorage.getItem("favoriteJobs");

      if (storedFavoriteData) {
        const favoriteDataArray = JSON.parse(storedFavoriteData) as Job[];
        const favoriteAds = favoriteDataArray.filter(
          (item) => item.favorite === true
        );
        setfavoriteJobsList(favoriteAds);
      }
    } catch (error) {
      console.error("Error fetching favorite ads from localStorage", error);
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
        <ul className="flex flex-col justify-center items-center">
          {favoriteJobsList.map((ad) => (
            <CardItem key={ad.id} ad={ad} onToggleButton={onToggleButton} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SavedJobsPage;

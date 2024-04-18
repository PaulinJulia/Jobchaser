import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

function SavedJobsPage() {
  const navigate = useNavigate();
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
    <div className="flex justify-center">
      <button
        className="bg-purple-500 hover:bg-purple-700 rounded-md font-semibold text-gray p-2 m-4"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
      <h1 className="font-semibold">Saved jobs</h1>
    </div>
  );
}

export default SavedJobsPage;

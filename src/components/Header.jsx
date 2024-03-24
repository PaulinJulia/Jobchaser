import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

function Header() {
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
    <header>
      <nav className="flex justify-end">
        <ul className="flex item-center text-lg font-semibold text-gray gap-9 p-2 m-2">
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <button className="hidden" onClick={handleSignOut}>
            Sign Out
          </button>
        </ul>
      </nav>
      <Link
        to="/"
        className="flex justify-center font-bold text-3xl text-gray-800 p-2 m-2"
      >
        JOBCHASER
      </Link>
    </header>
  );
}
export default Header;

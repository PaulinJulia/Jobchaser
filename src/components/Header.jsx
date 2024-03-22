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
    <header className="text-center decoration-36">
      <Link to="/">Jobchaser</Link>
      <nav>
        <ul className="flex align-items gap-9">
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
export default Header;

import React from "react";
import { Link } from "react-router-dom";

function Header() {

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

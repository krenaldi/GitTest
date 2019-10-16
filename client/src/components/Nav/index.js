import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/My Favorite Book">
        React Reading List
      </Link>
      <Link className="navbar-brand" to="/books/5da1deb7de03f8918a5a3ae8">
        No Match
      </Link>
    </nav>
  );
}

export default Nav;

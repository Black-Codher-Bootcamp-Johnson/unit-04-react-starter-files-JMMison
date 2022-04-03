import { Link } from "react-router-dom";
import React from "react";

const Header = (props) => {
  return (
    <React.Fragment>
      <header>
        <h1>My Bookcase</h1>
        <p>
        <Link to="/">Home </Link>
        <Link to= "/bookcase" className="bookLink">
          Bookcase
        </Link>
        </p>
      </header>
    </React.Fragment>
  );
};

export default Header;

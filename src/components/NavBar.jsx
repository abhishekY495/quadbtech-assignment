import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="bg-black py-5 flex justify-center mb-5">
      <Link to="/">
        <img
          src="https://static.tvmaze.com/images/tvm-header-logo.png"
          alt="tvmaze"
          className="w-36"
        />
      </Link>
    </nav>
  );
};

import {
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="section-container flex items-center justify-between bg-gray-50 shadow-md">
      <Link to={"/"}>
        <h1 className="text-xl font-semibold italic underline decoration-[#4b69ff] decoration-4 underline-offset-4 sm:text-2xl">
          Shop Name
        </h1>
      </Link>
      <nav className="space-x-4">
        <Link to="/login">
          <button
            className="space-x-2 rounded-lg border bg-[#4b69ff] p-1.5 font-semibold text-white duration-300 hover:border-blue-600 hover:bg-white hover:text-blue-600 sm:inline-flex sm:items-center sm:px-3 sm:py-1.5"
            title="Login"
          >
            <span className="hidden sm:block">Login</span>
            <FontAwesomeIcon
              className="-translate-x-1 sm:translate-x-0"
              icon={faRightToBracket}
            />
          </button>
        </Link>
        <Link to="/signup">
          <button
            className="space-x-2 rounded-lg border bg-[#4b69ff] px-1 py-1.5 font-semibold text-white duration-300 hover:border-blue-600 hover:bg-white hover:text-blue-600 sm:inline-flex sm:items-center sm:px-3 sm:py-1.5"
            title="Sign Up"
          >
            <span className="hidden sm:block">Sign Up</span>
            <FontAwesomeIcon
              className="-translate-x-1 sm:translate-x-0"
              icon={faUserPlus}
            />
          </button>
        </Link>
      </nav>
    </header>
  );
}

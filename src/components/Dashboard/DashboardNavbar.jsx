import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profile_pic from "@/assets/images/profile_image.png";
import down_arrow from "@/assets/icons/down_arrow.svg";
import { Search } from "lucide-react";

export default function DashboardNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState(null); // State to store logged-in user info
  const dropdownRef = useRef(null);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  //Log out logic

  const handleLogout = () => {
    // Remove user data from localStorage (or session)
    localStorage.removeItem("loggedInUser");
    alert("You have logged out!");
    navigate("/login");
  };

  useEffect(() => {
    // Fetch logged-in user details from localStorage
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setUser(loggedInUser);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !profileRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="section-container sticky top-0 flex items-center gap-2 bg-gray-50 shadow-md media375:gap-0">
      {/* Shop logo and Search Bar */}
      <div className="w-1/5">
        {/* Shop logo */}
        <Link to={"/dashboard"}>
          <h1 className="w-2 text-lg font-semibold italic underline decoration-[#4b69ff] decoration-4 underline-offset-4 media425:w-full sm:text-2xl">
            Shop Name
          </h1>
        </Link>
      </div>

      {/* Search Bar and Notification and Profile */}
      <div className="flex w-full justify-between">
        {/* Search Bar */}
        <div></div>

        {/*  Notification and Profile */}
        <div className="flex items-center space-x-4">
          {/* Notification */}
          <button className="relative" title="Notifications">
            <FontAwesomeIcon
              icon={faBell}
              className="md:text-2xl"
              color="gray"
            />
            <span className="absolute -right-1 h-3 w-3 rounded-full bg-[#4b69ff] text-[8px] text-white md:-top-1 md:h-4 md:w-4 md:text-xs">
              4
            </span>
          </button>
          {/* Profile */}
          <div
            className="flex cursor-pointer items-center space-x-2"
            title="Profile"
            ref={profileRef}
            onClick={toggleDropdown}
          >
            <img
              className="h-10 w-10 rounded-full object-contain"
              src={profile_pic}
              alt="profile"
            />
            <div className="hidden md:block">
              <p className="text-sm font-semibold">
                {user?.name || "User Name"}
              </p>
              <p className="text-xs text-gray-500">
                {user?.email || "user@example.com"}
              </p>
            </div>
            <img
              className="hidden w-7 md:block"
              src={down_arrow}
              alt="down arrow"
            />
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-5 top-14 z-10 mt-2 w-44 rounded-lg border bg-white text-sm shadow-lg"
            >
              <ul>
                <li
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  onClick={() => alert("My Profile")}
                >
                  My Profile
                </li>
                <li
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  Log Out
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

import React from "react";
import {
  ChartNoAxesColumnIncreasing,
  Package,
  Tag,
  User,
  LayoutList,
  ShoppingCart,
  MessageCircleMore,
  Settings,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({
  activeSection,
  onSelectSection,
  isHamburgerClick,
}) {
  const navigate = useNavigate();

  //Log out logic
  const handleLogout = () => {
    // Remove user data from localStorage (or session)
    localStorage.removeItem("loggedInUser");
    alert("You have logged out!");
    navigate("/login");
  };
  return (
    <aside
      id="sidebar"
      className={`${
        isHamburgerClick ? "hamburger" : "hamburger-none"
      } w-40 flex-col gap-10 lg:flex xl:w-1/5`}
    >
      {/* Menu */}
      <div className="flex flex-col items-center gap-3 text-gray-500">
        <h1 className="self-start px-8 text-xs">MENU</h1>
        <button
          className={`flex justify-start gap-3 rounded-xl px-5 py-3 duration-200 hover:bg-[#4b69ff] hover:text-white xl:w-48 ${
            activeSection === "dashboard" ? "bg-[#4b69ff] text-white" : ""
          }`}
          onClick={() => onSelectSection("dashboard")}
        >
          <ChartNoAxesColumnIncreasing />
          Dashboard
        </button>
        <button
          className={`flex justify-start gap-3 rounded-xl px-5 py-3 duration-200 hover:bg-[#4b69ff] hover:text-white xl:w-48 ${
            activeSection === "products" ? "bg-[#4b69ff] text-white" : ""
          }`}
          onClick={() => onSelectSection("products")}
        >
          <Package />
          Products
        </button>
        <button
          className={`flex justify-start gap-3 rounded-xl px-5 py-3 duration-200 hover:bg-[#4b69ff] hover:text-white xl:w-48 ${
            activeSection === "brands" ? "bg-[#4b69ff] text-white" : ""
          }`}
          onClick={() => onSelectSection("brands")}
        >
          <Tag />
          Brands
        </button>
        <button
          className={`flex justify-start gap-3 rounded-xl px-5 py-3 duration-200 hover:bg-[#4b69ff] hover:text-white xl:w-48 ${
            activeSection === "customer" ? "bg-[#4b69ff] text-white" : ""
          }`}
        >
          <User />
          Customer
        </button>
        <button
          className={`flex justify-start gap-3 rounded-xl px-5 py-3 duration-200 hover:bg-[#4b69ff] hover:text-white xl:w-48 ${
            activeSection === "category" ? "bg-[#4b69ff] text-white" : ""
          }`}
        >
          <LayoutList />
          Category
        </button>
        <button
          className={`flex justify-start gap-3 rounded-xl px-5 py-3 duration-200 hover:bg-[#4b69ff] hover:text-white xl:w-48 ${
            activeSection === "orders" ? "bg-[#4b69ff] text-white" : ""
          }`}
        >
          <ShoppingCart />
          Orders
        </button>
        <button
          className={`flex justify-start gap-3 rounded-xl px-5 py-3 duration-200 hover:bg-[#4b69ff] hover:text-white xl:w-48 ${
            activeSection === "chats" ? "bg-[#4b69ff] text-white" : ""
          }`}
        >
          <MessageCircleMore />
          Chats
        </button>
      </div>

      {/* other section */}
      <div className="flex flex-col items-center gap-3 text-gray-500">
        <h1 className="self-start px-8 text-xs">OTHER</h1>
        <button className="flex justify-start gap-3 rounded-xl px-5 py-3 duration-200 hover:bg-[#4b69ff] hover:text-white xl:w-48">
          <Settings />
          Settings
        </button>
        <button
          className="flex justify-start gap-3 rounded-xl px-5 py-3 duration-200 hover:bg-[#4b69ff] hover:text-white xl:w-48"
          onClick={handleLogout}
        >
          <LogOut />
          Logout
        </button>
      </div>
    </aside>
  );
}

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
      } w-40 flex-col gap-3 md:gap-10 lg:flex xl:w-1/5`}
    >
      {/* Menu */}
      <div className="flex flex-col items-center gap-3 text-gray-500">
        <h1 className="self-start px-8 text-xs">MENU</h1>
        <button
          className={`flex w-[117px] justify-start gap-2 rounded-xl px-2.5 py-2.5 text-sm font-semibold duration-200 hover:bg-[#4b69ff] hover:text-white sm:w-auto sm:gap-3 sm:px-5 sm:py-3 sm:text-base sm:font-normal xl:w-48 ${
            activeSection === "dashboard" ? "bg-[#4b69ff] text-white" : ""
          }`}
          onClick={() => onSelectSection("dashboard")}
        >
          <ChartNoAxesColumnIncreasing className="w-5 sm:w-6" />
          Dashboard
        </button>
        <button
          className={`flex w-[117px] justify-start gap-2 rounded-xl px-2.5 py-2.5 text-sm font-semibold duration-200 hover:bg-[#4b69ff] hover:text-white sm:w-auto sm:gap-3 sm:px-5 sm:py-3 sm:text-base sm:font-normal xl:w-48 ${
            activeSection === "products" ? "bg-[#4b69ff] text-white" : ""
          }`}
          onClick={() => onSelectSection("products")}
        >
          <Package className="w-5 sm:w-6" />
          Products
        </button>
        <button
          className={`flex w-[117px] justify-start gap-2 rounded-xl px-2.5 py-2.5 text-sm font-semibold duration-200 hover:bg-[#4b69ff] hover:text-white sm:w-auto sm:gap-3 sm:px-5 sm:py-3 sm:text-base sm:font-normal xl:w-48 ${
            activeSection === "brands" ? "bg-[#4b69ff] text-white" : ""
          }`}
          onClick={() => onSelectSection("brands")}
        >
          <Tag className="w-5 sm:w-6" />
          Brands
        </button>
        <button
          className={`flex w-[117px] justify-start gap-2 rounded-xl px-2.5 py-2.5 text-sm font-semibold duration-200 hover:bg-[#4b69ff] hover:text-white sm:w-auto sm:gap-3 sm:px-5 sm:py-3 sm:text-base sm:font-normal xl:w-48 ${
            activeSection === "customer" ? "bg-[#4b69ff] text-white" : ""
          }`}
        >
          <User className="w-5 sm:w-6" />
          Customer
        </button>
        <button
          className={`flex w-[117px] justify-start gap-2 rounded-xl px-2.5 py-2.5 text-sm font-semibold duration-200 hover:bg-[#4b69ff] hover:text-white sm:w-auto sm:gap-3 sm:px-5 sm:py-3 sm:text-base sm:font-normal xl:w-48 ${
            activeSection === "category" ? "bg-[#4b69ff] text-white" : ""
          }`}
        >
          <LayoutList className="w-5 sm:w-6" />
          Category
        </button>
        <button
          className={`flex w-[117px] justify-start gap-2 rounded-xl px-2.5 py-2.5 text-sm font-semibold duration-200 hover:bg-[#4b69ff] hover:text-white sm:w-auto sm:gap-3 sm:px-5 sm:py-3 sm:text-base sm:font-normal xl:w-48 ${
            activeSection === "orders" ? "bg-[#4b69ff] text-white" : ""
          }`}
        >
          <ShoppingCart className="w-5 sm:w-6" />
          Orders
        </button>
        <button
          className={`flex w-[117px] justify-start gap-2 rounded-xl px-2.5 py-2.5 text-sm font-semibold duration-200 hover:bg-[#4b69ff] hover:text-white sm:w-auto sm:gap-3 sm:px-5 sm:py-3 sm:text-base sm:font-normal xl:w-48 ${
            activeSection === "chats" ? "bg-[#4b69ff] text-white" : ""
          }`}
        >
          <MessageCircleMore className="w-5 sm:w-6" />
          Chats
        </button>
      </div>

      {/* other section */}
      <div className="flex flex-col items-center gap-3 text-gray-500">
        <h1 className="self-start px-8 text-xs">OTHER</h1>
        <button className="flex w-[117px] justify-start gap-2 rounded-xl px-2.5 py-2.5 text-sm font-semibold duration-200 hover:bg-[#4b69ff] hover:text-white sm:w-auto sm:gap-3 sm:px-5 sm:py-3 sm:text-base sm:font-normal xl:w-48">
          <Settings className="w-5 sm:w-6" />
          Settings
        </button>
        <button
          className="flex w-[117px] justify-start gap-2 rounded-xl px-2.5 py-2.5 text-sm font-semibold duration-200 hover:bg-[#4b69ff] hover:text-white sm:w-auto sm:gap-3 sm:px-5 sm:py-3 sm:text-base sm:font-normal xl:w-48"
          onClick={handleLogout}
        >
          <LogOut className="w-5 sm:w-6" />
          Logout
        </button>
      </div>
    </aside>
  );
}

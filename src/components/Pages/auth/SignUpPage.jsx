import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Check if email already exists in localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (existingUsers.some((user) => user.email === email)) {
      alert("Email already exists. Please use a different email.");
      return;
    }

    // Save new user to localStorage
    const newUser = { name, email, password };

    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));

    alert("Sign up successful! You can now log in.");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center gap-5 pt-7">
      <h1 className="text-xl font-bold media425:text-3xl">Sign Up</h1>
      <div className="flex flex-col gap-4 text-sm media425:text-base">
        <div
          id="input-container"
          className="flex w-[280px] flex-col gap-1 media425:w-[350px]"
        >
          <label htmlFor="name">Name</label>
          <input
            className="rounded-lg border bg-gray-100 px-4 py-1.5 media425:py-2"
            type="text"
            name="name"
            id="name"
            placeholder="Enter Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div
          id="input-container"
          className="flex w-[280px] flex-col gap-1 media425:w-[350px]"
        >
          <label htmlFor="email">Email</label>
          <input
            className="rounded-lg border bg-gray-100 px-4 py-1.5 media425:py-2"
            type="email"
            name="eamil"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div id="input-container" className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            className="rounded-lg border bg-gray-100 px-4 py-1.5 media425:py-2"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="rounded-2xl border bg-[#4b69ff] px-4 py-1.5 text-sm text-white duration-200 hover:border-[#4b69ff] hover:bg-white hover:text-[#4b69ff] media425:py-2 media425:text-base"
          type="button"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
        <p className="text-center text-xs media425:text-sm">
          Already have an account?{" "}
          <Link className="text-[#4b69ff]" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import sampleLoginData from "../../../data/SampleLoginData";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Login logic
    const localStorageData = JSON.parse(localStorage.getItem("users")) || [];

    const allUsers = [...sampleLoginData, ...localStorageData];

    const user = allUsers.find(
      (user) => user.email === email && user.password === password,
    );

    if (user) {
      // Save the logged-in user to localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      // alert("Login Successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="flex flex-col items-center gap-5 pt-7">
      <h1 className="text-xl font-bold media425:text-3xl">Login</h1>

      <div className="flex flex-col gap-6 text-sm media425:text-base">
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
        <Link className="text-center text-xs text-[#4b69ff] media425:text-sm">
          Forgot password?
        </Link>
        <button
          className="rounded-2xl border bg-[#4b69ff] px-4 py-1.5 text-sm text-white duration-200 hover:border-[#4b69ff] hover:bg-white hover:text-[#4b69ff] media425:py-2 media425:text-base"
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>
        <p className="text-center text-xs media425:text-sm">
          Don't have an account?{" "}
          <Link className="text-[#4b69ff]" to={"/signup"}>
            Sign up
          </Link>
        </p>
      </div>

      <div className="flex flex-col text-xs">
        ( For Demo <br></br> Email: "user1@example.com" <br></br> Password:
        "Password@1234#" )
      </div>
    </div>
  );
}

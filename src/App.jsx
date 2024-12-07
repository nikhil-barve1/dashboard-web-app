import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import DashboardNavbar from "./components/Dashboard/DashboardNavbar";

function App() {
  const location = useLocation();

  const isDashboard = location.pathname === "/dashboard";

  return (
    <>
      {isDashboard ? <DashboardNavbar /> : <Navbar />}
      <Outlet />
    </>
  );
}

export default App;

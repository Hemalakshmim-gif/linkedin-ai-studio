import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { Outlet } from "react-router-dom";

import "../styles/MainLayout.css";

function MainLayout() {
  return (
    <>
      <Navbar />

      <Sidebar />

      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
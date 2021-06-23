import React from "react";
import Navbar from "./components/Navbar.js";
import Sidebar from "./components/Sidebar.js";

export default function AdminScreen() {
  return (
    <>
      <Navbar />
      <div className="col-4">
      <Sidebar />
      </div>
      
    </>
  );
}

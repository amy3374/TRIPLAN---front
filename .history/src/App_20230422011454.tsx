import { Outlet } from "react-router-dom";
import React from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

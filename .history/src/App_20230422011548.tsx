import { Outlet } from "react-router-dom";
import React from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

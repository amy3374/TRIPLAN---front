import { Outlet } from "react-router-dom";
import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;

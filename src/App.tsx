import { Outlet } from "react-router-dom";
import React, { useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const sendRequest = async() => {
    const response = await axios.get('http://localhost:8080');
    console.log(response);
    console.log(response.data);
  };

  useEffect(()=>{
    sendRequest();    
  });

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;

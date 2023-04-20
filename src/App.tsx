import {Outlet} from "react-router-dom"
import React from 'react';
import './App.css';
import Header from "./components/Header";


function App() {
  return (<>
    <Header />
    <Outlet />
  </>
   
  );
}

export default App;

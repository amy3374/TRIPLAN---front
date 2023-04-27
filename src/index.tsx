import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home"
import Plan from './pages/Plan';
import MyPlan from './pages/MyPlan';
import MyPlanDetail from './pages/MyPlanDetail';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    children : [{
      index : true,
      element: <Home />,

  },
  {
    path : "plan",
    element: <Plan />,

},
{
  path : "myplan",
  element: <MyPlan />,

},
{
  path : "myplandetail",
  element: <MyPlanDetail />,

},{
  path : "login",
  element: <Login />
}]
  }
])



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

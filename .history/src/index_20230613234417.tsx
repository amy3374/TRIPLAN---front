import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Plan from "./pages/Plan";
import MyPlan from "./pages/MyPlan";
import MyPlanDetail from "./pages/MyPlanDetail";
import Login from "./pages/Login";
import Join from "./pages/Join";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProtectedRouted from "./pages/ProtectedRouted";
import ReviewEdit from "./pages/ReviewEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "plan",
        element: <Plan />,
      },
      {
        path: "myplan",
        element: (
          <ProtectedRouted>
            <MyPlan />
          </ProtectedRouted>
        ),
      },
      {
        path: "myplan/:id",
        element: <MyPlanDetail />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "join",
        element: <Join />,
      },
      {
        path: "reviewEdit/:id",
        element: <ReviewEdit />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

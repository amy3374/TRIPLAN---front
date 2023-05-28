import React, { useEffect, useState } from "react";
import Logo from "./ui/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userState } from "../redux/reducer/User";
import { logout as logOut } from "../components/api/Auth";
export default function Header() {
  const navigiate = useNavigate();
  const user = useSelector((state: any) => {
    return state.User;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const storage = JSON.parse(window.localStorage.getItem("User") as string);

    storage &&
      dispatch({
        type: "LOGIN",
        payload: {
          _id: storage._id,
          name: storage.name,
          username: storage.username,
        },
      });
  }, []);

  const goToLogin = () => {
    navigiate("/login");
  };

  const logout = () => {
    logOut();
    dispatch({
      type: "LOGOUT",
    });
  };

  console.log(JSON.parse(window.localStorage.getItem("User")));

  return (
    <div className="flex justify-between items-center p-3 px-8 h-[10%]">
      <Link to="/">
        <Logo />
      </Link>
      {user.isLogin ? (
        <div>
          <button className="bg-green p-2 rounded-xl text-white">
            마이페이지
          </button>
          <button
            className="bg-green p-2 rounded-xl text-white"
            onClick={logout}
          >
            로그아웃
          </button>
        </div>
      ) : (
        <button
          className="bg-green p-2 rounded-xl text-white"
          onClick={goToLogin}
        >
          로그인
        </button>
      )}
    </div>
  );
}

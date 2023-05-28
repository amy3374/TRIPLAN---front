import React, { useEffect, useState } from "react";
import Logo from "./ui/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userState } from "../redux/reducer/User";

export default function Header() {
  const navigiate = useNavigate();
  const user = useSelector((state: any) => {
    // console.log(state);

    return state.User.user;
  });
  useEffect(() => {}, []);
  const dispatch = useDispatch();

  const storage = window.localStorage.getItem("User") as unknown as userState;
  dispatch({
    type: "LOGIN",
    payload: {
      _id: storage._id,
      user: storage.name,
      username: storage.username,
    },
  });
  console.log(user);
  const goToLogin = () => {
    navigiate("/login");
  };
  const logout = () => {
    window.localStorage.removeItem("User");
  };
  return (
    <div className="flex justify-between items-center p-3 px-8 h-[10%]">
      <Link to="/">
        <Logo />
      </Link>
      {user ? (
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

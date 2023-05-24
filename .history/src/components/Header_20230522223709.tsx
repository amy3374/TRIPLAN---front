import React, { useEffect, useState } from "react";
import Logo from "./ui/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const navigiate = useNavigate();
  const user = useSelector((state: any) => {
    return state.User.User;
  });
  useEffect(() => {}, []);

  console.log(user);
  console.log(window.localStorage.getItem("User"));
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

import React from "react";
import Logo from "./ui/Logo";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 px-8 h-5-1">
      <Logo />
      <button className="bg-green p-2 rounded-xl text-white">로그인</button>
    </div>
  );
}

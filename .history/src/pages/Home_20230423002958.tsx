import React, { useState } from "react";
import Logo from "../components/ui/Logo";
import { getPlan } from "../components/api/chatGPT";
import { useNavigate } from "react-router-dom";
import Loading from "../components/ui/Loading";

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    getPlan("서울", "3박 4일").then((res) => {
      navigate("/plan", { state: res });
      setLoading(false);
    });
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="flex justify-center items-center flex-col h-[90%]">
      <Logo />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center  w-[20em] md:w-[30em] lg:w-[35em]  gap-3 mt-7"
      >
        <input
          className="w-full border border-gray rounded-xl text-xl font-bold  text-center p-3 outline-none"
          type="text"
          placeholder="여행지"
        />
        <input
          className="w-full border border-gray rounded-xl text-xl font-bold  text-center p-3 outline-none"
          type="text"
          placeholder="여행일정"
        />
        <input
          className="w-full bg-pink rounded-xl text-xl font-bold font-wh p-3 cursor-pointer hover:scale-[1.02] ease-in duration-100"
          type="submit"
          value="여행"
        />
      </form>
    </div>
  );
}

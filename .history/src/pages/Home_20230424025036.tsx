import React, { useState } from "react";
import Logo from "../components/ui/Logo";
import { getPlan } from "../components/api/chatGPT";
import { useNavigate } from "react-router-dom";
import Loading from "../components/ui/Loading";

export interface planInfo {
  des?: string;
  schedule?: string;
}

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [planInfo, setplanInfo] = useState<planInfo>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (planInfo?.des && planInfo.schedule) {
      setLoading(true);
      planInfo &&
        getPlan(planInfo.des, planInfo.schedule).then((res) => {
          navigate("/plan", { state: { res, planInfo } });
          setLoading(false);
        });
    } else {
      alert("여행지와 일정을 모두 적어주세요");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setplanInfo((planInfo) => ({ ...planInfo, [name]: value }));
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
          onChange={handleChange}
          name="des"
        />
        <input
          className="w-full border border-gray rounded-xl text-xl font-bold  text-center p-3 outline-none"
          type="text"
          placeholder="여행일정"
          onChange={handleChange}
          name="schedule"
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

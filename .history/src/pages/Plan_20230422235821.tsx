import React from "react";
import PlanBox from "../components/PlanBox";
import BaggageBox from "../components/BaggageBox";
import { useLocation } from "react-router-dom";

export default function Plan() {
  const location = useLocation();
  console.log(location);

  return (
    <section className="flex flex-col">
      <div className=" grid grid-cols-[1.5fr,1fr] gap-2 m-2 py-5">
        <PlanBox />
        <BaggageBox />
      </div>
      <button className="bg-green p-2 text-white rounded-lg m-2 w-14 self-end">
        저장
      </button>
    </section>
  );
}

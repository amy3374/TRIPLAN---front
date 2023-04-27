import React from "react";
import PlanBox from "../components/PlanBox";
import BaggageBox from "../components/BaggageBox";

export default function Plan() {
  return (
    <section className="flex flex-col">
      <div className=" grid grid-cols-[1.5fr,1fr] gap-2 m-2 py-5">
        <PlanBox />
        <BaggageBox />
      </div>
      <button className="bg-green p-2 text-white">저장</button>
    </section>
  );
}

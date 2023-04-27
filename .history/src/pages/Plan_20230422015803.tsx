import React from "react";
import PlanBox from "../components/PlanBox";
import BaggageBox from "../components/BaggageBox";

export default function Plan() {
  return (
    <>
      <div className=" grid grid-cols-[1.5fr,1fr] gap-2 m-2 py-5">
        <PlanBox />
        <BaggageBox />
      </div>
      <button>저장</button>
    </>
  );
}

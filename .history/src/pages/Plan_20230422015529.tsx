import React from "react";
import PlanBox from "../components/PlanBox";
import BaggageBox from "../components/BaggageBox";

export default function Plan() {
  return (
    <div className=" grid grid-cols-[1.5fr,1fr]  ">
      <PlanBox />
      <BaggageBox />
    </div>
  );
}

import React from "react";
import PlanBox from "../components/PlanBox";
import BaggageBox from "../components/BaggageBox";

export default function Plan() {
  return (
    <div className=" flex grid-cols-4 ">
      <PlanBox />
      <BaggageBox />
    </div>
  );
}
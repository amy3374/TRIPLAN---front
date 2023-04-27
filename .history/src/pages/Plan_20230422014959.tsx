import React from "react";
import PlanBox from "../components/PlanBox";
import BaggageBox from "../components/BaggageBox";

export default function Plan() {
  return (
    <div className="flex">
      <PlanBox />
      <BaggageBox />
    </div>
  );
}

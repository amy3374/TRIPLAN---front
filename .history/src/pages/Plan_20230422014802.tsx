import React from "react";
import PlanBox from "../components/PlanBox";
import BaggageBox from "../components/BaggageBox";
export interface Boxprops {
  w: number;
}
export default function Plan() {
  return (
    <div className="flex">
      <PlanBox w={1} />
      <BaggageBox />
    </div>
  );
}

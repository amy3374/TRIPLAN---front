import React from "react";
import PlanBox from "../components/PlanBox";
import BaggageBox from "../components/BaggageBox";

export default function Plan() {
  interface UsersProps {
    width: number;
  }
  return (
    <div className="flex">
      <PlanBox width:number={1} />
      <BaggageBox />
    </div>
  );
}

import React from "react";
import PlanBox from "../components/PlanBox";
import BaggageBox from "../components/BaggageBox";

export default function Plan() {
  return (
    <div className=" grid  col-start-7 ">
      <PlanBox />
      <BaggageBox />
    </div>
  );
}

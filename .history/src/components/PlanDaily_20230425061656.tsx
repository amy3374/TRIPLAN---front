import React from "react";
import { FaPlus } from "react-icons/fa";

interface PlanDailyProps {
  id: number;
  content: string;
}

export default function PlanDaily({ id, content }: PlanDailyProps) {
  const makePlanList = (data: string): string[] => {
    return data.split("-");
  };

  return (
    <section className="p-2">
      <p className="text-xl font-bold">DAY {id + 1}</p>
      <div className="m-2">
        {makePlanList(content).map((item, i) => (
          <div key={i}> {item}</div>
        ))}
      </div>
      <div className="flex items-center p-2">
        <input
          className="outline-none border p-1.5 rounded-xl border-stone-300 mr-2 w-full"
          type="text"
        />
        <button className="text-pink p-1 rounded-lg text-2xl">
          <FaPlus />
        </button>
      </div>
    </section>
  );
}

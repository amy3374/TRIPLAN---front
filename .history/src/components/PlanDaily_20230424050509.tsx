import React from "react";

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
      <div>
        {makePlanList(content).map((item, i) => (
          <div key={i}> {item}</div>
        ))}
      </div>
      <div className="flex">
        <input
          className="outline-none border p-2 rounded-lg border-stone-300 mr-2 w-5/6"
          type="text"
        />
        <button className="bg-green p-2 rounded-lg text-white w-1/6">
          등록
        </button>
      </div>
    </section>
  );
}

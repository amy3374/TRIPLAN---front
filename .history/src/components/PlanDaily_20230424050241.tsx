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
    <section>
      <h>DAY {id + 1}</h>
      <div>
        {makePlanList(content).map((item, i) => (
          <div key={i}> {item}</div>
        ))}
      </div>
    </section>
  );
}

import React from "react";

interface PlanDailyProps {
  id: number;
  content: string;
}

export default function PlanDaily({ id, content }: PlanDailyProps) {
  const makePlanList = (content: string): string[] => {
    return content.split("-");
  };
  return (
    <div>
      {makePlanList(content).map((item) => {
        <div>{item}</div>;
      })}
    </div>
  );
}

import React from "react";

interface PlanDailyProps {
  id: number;
  content: string;
}

export default function PlanDaily({ id, content }: PlanDailyProps) {
  const makePlanList = (content: string) => {
    return content.split("-");
  };
  return <div></div>;
}

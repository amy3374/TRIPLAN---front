import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import Input from "./Input";
import { ListItem } from "./BaggageBox";
import PlanItem from "./PlanItem";

interface PlanDailyProps {
  day: number;
  content: string;
}
export default function PlanDaily({ day, content }: PlanDailyProps) {
  const makePlanList = (data: string): string[] => {
    return data.split("-");
  };

  const [planData, setPlanData] = useState<ListItem[]>([]);

  const handleAdd = (data: ListItem) => {
    setPlanData((pre) => [...pre, data]);
  };

  const handleDelete = (id: string) => {
    console.log(id);

    setPlanData(planData.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const Data = makePlanList(content)
      .slice(1)
      .map((item) => {
        return { item: item, id: v4() };
      });
    setPlanData(Data);
  }, [content]);
  console.log(planData);

  return (
    <section className="p-2">
      <p className="text-xl font-bold">DAY {day + 1}</p>
      <ul className="m-2">
        {planData.length >= 1 ? (
          planData.map((item, i) => (
            <PlanItem {...item} onDelete={handleDelete} key={item.id} />
          ))
        ) : (
          <div className="text-4xl font-bold text- text-center p-5">
            <h1 className="p-2">일정을</h1>
            <h1 className="p-2">추가해보세요!</h1>
          </div>
        )}
      </ul>
      <Input color="pink" onAdd={handleAdd} />
    </section>
  );
}

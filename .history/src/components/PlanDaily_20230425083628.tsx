import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
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

  const [palnData, setPlanData] = useState<ListItem[]>([]);

  const handleAdd = (data: ListItem) => {
    setPlanData((pre) => [...pre, data]);
  };

  const handleDelete = (id: string) => {
    console.log(id);

    setPlanData(palnData.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const Data = makePlanList(content)
      .slice(1)
      .map((item) => {
        return { item: item, id: v4() };
      });
    setPlanData(Data);
  }, [content]);

  return (
    <section className="p-2">
      <p className="text-xl font-bold">DAY {day + 1}</p>
      <div className="m-2">
        {palnData.map((item, i) => (
          <PlanItem {...item} onDelete={handleDelete} key={item.id} />
        ))}
      </div>
      <Input color="pink" onAdd={handleAdd} />
    </section>
  );
}

import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import Input from "./Input";
import { ListItem } from "../pages/Plan";
import PlanItem from "./PlanItem";
import Time from "./Time";

interface PlanDailyProps {
  day: number;
  content: any;
  dayId: string;
  onDelete: (id: string) => void;
  onAdd: (newItem: ListItem, dayId?: string) => void;
}
export default function PlanDaily({
  day,
  content,
  dayId,
  onDelete,
  onAdd,
}: PlanDailyProps) {
  return (
    <section className="p-2">
      <p className="text-xl font-bold">DAY {day + 1}</p>
      <ul className="m-2">
        {content.length > 0 ? (
          content.map((item: ListItem, i: number) => {
            return (
              <PlanItem
                {...item}
                onDelete={onDelete}
                key={item.id}
                dayId={dayId}
                time={i}
              />
            );
          })
        ) : (
          <div className="text-4xl font-bold text-stone-300 text-center p-5">
            <h1 className="p-2">일정을</h1>
            <h1 className="p-2">추가해보세요!</h1>
          </div>
        )}
      </ul>
      <Input color="pink" onAdd={onAdd} dayId={dayId} />
    </section>
  );
}

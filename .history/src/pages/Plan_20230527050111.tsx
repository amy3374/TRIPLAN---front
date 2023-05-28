import React, { useEffect, useState, useCallback } from "react";
import PlanBox from "../components/PlanBox";
import BaggageBox from "../components/BaggageBox";
import { useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export type ListItem = {
  id: string;
  item: string;
};
export type PlanData = {
  [key: string]: any;
  id: string;
  day: number;
  items: ListItem[];
};

export default function Plan() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [dragIndex, setDragIndex] = useState<number>();
  const [dragDayIndex, setDragDayIndex] = useState<string>("");
  const [dropIndex, setDropIndex] = useState<number>();
  const list = useSelector((state: any) => {
    return state.BaggageList.baggageList;
  });
  const plan_re = useSelector((state: any) => {
    return state.PlanList;
  });

  //

  const [plan, setPlan] = useState<PlanData>();
  //

  const handleAddPlan = (newItem: ListItem, dayId?: string) => {
    const updated = { ...plan };
    const updatedItems = [...updated[dayId as string].items, newItem];

    updated[dayId as string] = {
      ...updated[dayId as string],
      items: updatedItems,
    };

    setPlan(updated as PlanData);
  };

  const handleDeletePlan = (id: string, dayId?: string) => {
    const updated = { ...plan };

    const items = updated[dayId as string].items.filter(
      (item: any) => item.id !== id
    );
    updated[dayId as string] = { ...updated[dayId as string], items };
    setPlan(updated as PlanData);
  };
  const handleDragStart = (e: any, id: string, dayId: string) => {
    const list = (plan as PlanData)[dayId].items;

    setDragIndex(list.findIndex((i: any) => i.id === id));
    setDragDayIndex(dayId);
  };
  const handleDrop = (id: string, dayId: string) => {
    const updated = { ...plan };
    const list = updated[dayId].items;
    setDropIndex(list.findIndex((i: any) => i.id === id));
    if (dragIndex == undefined) return;
    const dropItemContent = list[dragIndex];

    if (dragDayIndex !== dayId) {
      const draglist = updated[dragDayIndex].items;
      const dropItemContent = draglist[dragIndex];
      draglist.splice(dragIndex, 1);
      list.splice(dropIndex, 0, dropItemContent);
    } else {
      console.log("drag" + dragIndex);
      console.log("drop" + dropIndex);
      list.splice(dragIndex, 1);
      list.splice(dropIndex, 0, dropItemContent);
    }

    updated[dayId as string] = { ...updated[dayId as string], list };
    setPlan(updated as PlanData);
  };
  console.log(plan_re);

  const handleDayDrop = (dayId: string) => {
    const updated = { ...plan };
    const list = updated[dayId].items;
    // console.log(list.length);
    if (list.length === 0) {
      const draglist = updated[dragDayIndex].items;
      if (dragIndex == undefined) return;
      const dropItemContent = draglist[dragIndex];
      draglist.splice(dragIndex, 1);
      list.splice(0, 0, dropItemContent);
      updated[dayId as string] = { ...updated[dayId as string], list };
      setPlan(updated as PlanData);
    }
  };

  useEffect(() => {
    setPlan(location && location.state.res);
    // console.log(JSON.parse(location.state.res));
    dispatch({ type: "INIT", payload: location.state.res });
  }, []);

  return (
    <section className="flex flex-col">
      <div className=" grid grid-cols-[1.5fr,1fr] gap-2 m-2 py-5 ">
        {
          <PlanBox
            onDelete={handleDeletePlan}
            onAdd={handleAddPlan}
            content={plan_re as PlanData}
            planInfo={location.state.planInfo}
            onDragStart={handleDragStart}
            onDrop={handleDrop}
            onDayDrop={handleDayDrop}
          />
        }

        <BaggageBox
          list={list}
          onAdd={handleAddPlan}
          onDelete={handleDeletePlan}
        />
      </div>
      <button className="bg-green p-2 text-white rounded-lg m-2 w-14 self-end">
        저장
      </button>
    </section>
  );
}

import React, { useState } from "react";
import PlanBox from "../components/PlanBox";
import BaggageBox from "../components/BaggageBox";
import { useLocation } from "react-router-dom";
import { v4 } from "uuid";

export type ListItem = {
  item: string;
  id: string;
};

export default function Plan() {
  const location = useLocation();
  console.log(location.state);

  const [list, setList] = useState<ListItem[]>([
    { item: "칫솔", id: "sdf" },
    { item: "치약", id: v4() },
    { item: "치약", id: v4() },
  ]);

  const handleAdd = (newItem: ListItem) => {
    setList((item) => [...item, newItem]);
  };

  const handleDelete = (id: string) => {
    console.log(id);

    setList(list.filter((item) => item.id !== id));
  };

  return (
    <section className="flex flex-col">
      <div className=" grid grid-cols-[1.5fr,1fr] gap-2 m-2 py-5 ">
        <PlanBox
          content={location.state.res}
          planInfo={location.state.planInfo}
        />

        <BaggageBox {...list} onAdd={handleAdd} onDelete={handleDelete} />
      </div>
      <button className="bg-green p-2 text-white rounded-lg m-2 w-14 self-end">
        저장
      </button>
    </section>
  );
}

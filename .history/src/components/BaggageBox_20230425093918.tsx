import { useState } from "react";
import BaggageItem from "./BaggageItem";

import { v4 } from "uuid";
import Input from "./Input";

export type ListItem = {
  item: string;
  id: string;
};

export default function BaggageBox() {
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
    <section className="flex flex-col ">
      <div className="sticky top-0">
        <div className=" bg-ligntgreen rounded-lg p-2 text-md font-bold text-center  ">
          준비물
        </div>
        <div className=" border p-3 mt-3 border-stone-300 rounded-lg">
          <Input color="green" onAdd={handleAdd} />
          {list.length == 0 ? (
            <h1 className="text-4xl font-bold text-stone-300">
              {" "}
              준비물을 추가해보세요!
            </h1>
          ) : (
            list.map((item) => (
              <BaggageItem {...item} onDelete={handleDelete} key={item.id} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

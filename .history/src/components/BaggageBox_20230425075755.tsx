import { useState } from "react";
import BaggageList from "./BaggageList";
import BaggageItem, { BaggageitemProps } from "./BaggageItem";
import { FaPlus } from "react-icons/fa";
import { v4 } from "uuid";
import Input from "./Input";

export type BaggageItem = {
  item: string;
  id: string;
};

export default function BaggageBox() {
  const [list, setList] = useState<BaggageItem[]>([
    { item: "칫솔", id: "sdf" },
    { item: "치약", id: v4() },
    { item: "치약", id: v4() },
  ]);
  const [input, setInput] = useState<string>();

  const handleAdd = (newItem: BaggageItem) => {
    setList((item) => [...item, newItem]);
  };

  const handleDelete = (id: string) => {
    console.log(id);

    setList(list.filter((item) => item.id !== id));
  };

  return (
    <section>
      <div className="bg-ligntgreen rounded-lg p-2 text-md font-bold text-center">
        준비물
      </div>
      <div className="border p-3 mt-3 border-stone-300 rounded-lg">
        {list.map((item) => (
          <BaggageItem {...item} onDelete={handleDelete} key={item.id} />
        ))}

        <Input color="green" onAdd={handleAdd} />
      </div>
    </section>
  );
}

import { useState } from "react";
import BaggageList from "./BaggageList";
import BaggageItem, { BaggageitemProps } from "./BaggageItem";
import { FaPlus } from "react-icons/fa";
import { v4 } from "uuid";

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

  const handleAdd = (item: BaggageItem) => {
    if (input?.trim().length === 0) {
      return;
    }
    setList((item) => [...item, { item: input as string, id: v4() }]);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
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
        <div className="flex items-center justify-between m-2">
          <input
            className="outline-none border p-1.5 rounded-xl border-stone-300 mr-2 w-full "
            type="text"
            value={input || ""}
            onChange={handleChange}
          />
          <button
            className=" p-1 rounded-lg text-green text-2xl"
            onClick={handleClick}
          >
            <FaPlus />
          </button>
        </div>
      </div>
    </section>
  );
}

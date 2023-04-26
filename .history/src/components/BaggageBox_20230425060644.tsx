import { useState } from "react";
import BaggageList from "./BaggageList";
import { BaggageitemProps } from "./BaggageItem";
import { HiPlus } from "react-icons/hi";

export default function BaggageBox() {
  const [list, setList] = useState<BaggageitemProps[]>([
    { item: "칫솔", id: 1 },
    { item: "치약", id: 2 },
    { item: "치약", id: 3 },
  ]);

  const handleClick = () => {};

  return (
    <section>
      <div className="bg-ligntgreen rounded-lg p-2 text-md font-bold text-center">
        준비물
      </div>
      <div className="border p-3 mt-3 border-stone-300 rounded-lg">
        <BaggageList list={list} />
        <div className="flex items-center justify-between">
          <input
            className="outline-none border p-2 rounded-xl border-stone-300 mr-2 w-full "
            type="text"
          />
          <button className=" p-2 rounded-lg text-green text-2xl font-bold ">
            <HiPlus />
          </button>
        </div>
      </div>
    </section>
  );
}

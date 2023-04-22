import { useState } from "react";
import BaggageList from "./BaggageList";
import { BaggageitemProps } from "./BaggageItem";

export default function BaggageBox() {
  const [list, setList] = useState<BaggageitemProps[]>([
    { item: "칫솔", id: 1 },
    { item: "칫솔", id: 1 },
  ]);
  return (
    <section>
      <div className="bg-ligntgreen rounded-lg p-2 text-md font-bold text-center">
        준비물
      </div>
      <div className="border p-3 mt-3 border-stone-300 rounded-lg">
        <BaggageList list={list} />
        <div className="flex items-center">
          <input
            className="outline-none border p-2 rounded-lg border-stone-300 mr-2 w-5/6"
            type="text"
          />
          <button className="bg-green p-2 rounded-lg text-white w-1/6">
            등록
          </button>
        </div>
      </div>
    </section>
  );
}

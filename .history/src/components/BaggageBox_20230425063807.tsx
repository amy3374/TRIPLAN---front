import { useState } from "react";
import BaggageList from "./BaggageList";
import { BaggageitemProps } from "./BaggageItem";
import { FaPlus } from "react-icons/fa";

export default function BaggageBox() {
  const [list, setList] = useState<BaggageitemProps[]>([
    { item: "칫솔", id: 1 },
    { item: "치약", id: 2 },
    { item: "치약", id: 3 },
  ]);
  const [input, setInput] = useState<string>();

  const handleClick = () => {
    if ((input as string).trim().length === 0) {
      return;
    }
    setList((item) => [...item, { item: input as string, id: 4 }]);
    setInput(" ");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <section>
      <div className="bg-ligntgreen rounded-lg p-2 text-md font-bold text-center">
        준비물
      </div>
      <div className="border p-3 mt-3 border-stone-300 rounded-lg">
        <BaggageList list={list} />
        <div className="flex items-center justify-between m-2">
          <input
            className="outline-none border p-1.5 rounded-xl border-stone-300 mr-2 w-full "
            type="text"
            value={input}
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

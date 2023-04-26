import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { BaggageItem } from "./BaggageBox";
import { v4 } from "uuid";
interface inputProps {
  color: string;
  onAdd: (input: BaggageItem) => void;
}

export default function Input({ color, onAdd }: inputProps) {
  const [input, setInput] = useState<BaggageItem>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ item: e.target.value, id: v4() });
  };
  return (
    <div className="flex items-center justify-between m-2">
      <input
        className="outline-none border p-1.5 rounded-xl border-stone-300 mr-2 w-full "
        type="text"
        onChange={handleChange}
      />
      <button
        className=" p-1 rounded-lg text-green text-2xl"
        onClick={() => onAdd(input as BaggageItem)}
      >
        <FaPlus />
      </button>
    </div>
  );
}

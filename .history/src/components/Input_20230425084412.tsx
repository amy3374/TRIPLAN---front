import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { ListItem } from "./BaggageBox";
import { v4 } from "uuid";

interface inputProps {
  color: string;
  onAdd: (input: ListItem) => void;
}

export default function Input({ color, onAdd }: inputProps) {
  const [input, setInput] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleClick = () => {
    if (input?.trim().length === 0) {
      return;
    }
    onAdd({ id: v4(), item: input as string });
    setInput("");
  };
  console.log(input);

  return (
    <div className="flex items-center justify-between m-2">
      <input
        className="outline-none border p-1.5 rounded-xl border-stone-300 mr-2 w-full "
        type="text"
        value={input || ""}
        onChange={handleChange}
      />
      <button
        className={`p-1 rounded-lg text-${color} text-2xl`}
        onClick={handleClick}
      >
        <FaPlus />
      </button>
    </div>
  );
}

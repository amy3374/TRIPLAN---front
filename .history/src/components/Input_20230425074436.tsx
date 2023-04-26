import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

interface inputProps {
  color: string;
  onAdd: () => void;
}

export default function Input() {
  const [input, setInput] = useState<string>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
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
  );
}

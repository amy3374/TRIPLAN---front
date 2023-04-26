import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export type BaggageitemProps = {
  item: string;
  id: string;
  onDelete: (id: string) => void;
};

export default function BaggageItem({ item, id, onDelete }: BaggageitemProps) {
  return (
    <li className="flex items-center justify-between m-1 p-1 hover:scale-[1.0015] ease-in duration-150 cursor-default">
      <p className="text-lg font-bold ">{item}</p>
      <button
        className="transition-color hover:text-green  ease-in duration-150 cursor-default"
        onClick={() => onDelete(id)}
      >
        <FaTrashAlt />
      </button>
    </li>
  );
}

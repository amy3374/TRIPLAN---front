import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export type BaggageitemProps = {
  item: string;
  id: string;
  onDelete: (id: string) => void;
};

export default function BaggageItem({ item, id, onDelete }: BaggageitemProps) {
  return (
    <li className="flex items-center justify-between m-1 p-1 ">
      <p className="text-lg font-bold hover:scale-[1.015] ease-in duration-150 cursor-default">
        {item}
      </p>
      <button onClick={() => onDelete(id)}>
        <FaTrashAlt />
      </button>
    </li>
  );
}

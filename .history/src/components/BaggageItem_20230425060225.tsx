import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export type BaggageitemProps = {
  item: string;
  id: number;
};

export default function BaggageItem({ item, id }: BaggageitemProps) {
  return (
    <li className="flex items-center justify-between m-1 p-1">
      <p className="font-medium">{item}</p>
      <button>
        <FaTrashAlt />
      </button>
    </li>
  );
}

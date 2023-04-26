import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdDragIndicator } from "react-icons/md";

export type PlanItemProps = {
  item: string;
  id: string;
  onDelete: (id: string) => void;
};

export default function PlanItem({ item, id, onDelete }: PlanItemProps) {
  return (
    <li className="flex items-center hover:scale-[1.005] ease-in duration-150 cursor-pointer ">
      <div className="mr-2 text-stone-200 text-2xl">
        <MdDragIndicator />
      </div>
      <p className="text-lg w-full p-0.5">{item}</p>
      <button onClick={() => onDelete(id)}>
        <FaTrashAlt />
      </button>
    </li>
  );
}

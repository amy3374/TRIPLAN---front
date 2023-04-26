import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdDragHandle } from "react-icons/md";

export type PlanItemProps = {
  item: string;
  id: string;
  onDelete: (id: string) => void;
};

export default function PlanItem({ item, id, onDelete }: PlanItemProps) {
  return (
    <li className="flex items-center m-1 p-1 ">
      <div className="mr-2 text-zinc-500">
        <MdDragHandle />
      </div>
      <p className="text-lg font-bold w-full p-0.5">{item}</p>
      <button onClick={() => onDelete(id)}>
        <FaTrashAlt />
      </button>
    </li>
  );
}

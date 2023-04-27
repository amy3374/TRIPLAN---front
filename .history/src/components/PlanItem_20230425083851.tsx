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
    <li className="flex items-center justify-between m-1 p-1">
      <div>
        <MdDragHandle />
      </div>
      <p className="text-lg font-bold">{item}</p>
      <button onClick={() => onDelete(id)}>
        <FaTrashAlt />
      </button>
    </li>
  );
}

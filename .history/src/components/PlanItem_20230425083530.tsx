import React from "react";

export type PlanItemProps = {
  item: string;
  id: string;
  onDelete: (id: string) => void;
};

export default function PlanItem({ item, id, onDelete }: PlanItemProps) {
  return (
    <li className="flex items-center justify-between m-1 p-1">
      <p className="text-lg font-bold">{item}</p>
      <button onClick={() => onDelete(id)}>
        <FaTrashAlt />
      </button>
    </li>
  );
}

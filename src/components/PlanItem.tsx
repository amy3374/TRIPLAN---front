import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdDragIndicator } from "react-icons/md";

export type PlanItemProps = {
  item: string;
  id: string;
  onDelete: (id: string, key?: string) => void;
  dayId: string;
  time: number;
};

export default function PlanItem({
  item,
  id,
  onDelete,
  dayId,
  time,
}: PlanItemProps) {
  return (
    <li className="flex items-center hover:scale-[1.005] ease-in duration-150 cursor-default ">
      <div className="mr-2 text-stone-200 text-2xl">
        <MdDragIndicator />
      </div>
      {/* <p>{9 + time + ":00　"}</p> */}
      <p className="text-lg w-full p-0.5 ">{item}</p>
      <button
        className=" transition-color hover:text-pink  ease-in duration-150 cursor-pointer"
        onClick={() => onDelete(id, dayId)}
      >
        <FaTrashAlt />
      </button>
    </li>
  );
}

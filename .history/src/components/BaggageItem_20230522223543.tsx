import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";

export type BaggageitemProps = {
  item: string;
  id: string;
  onDelete: (id: string) => void;
  Baggage?: boolean;
};

export default function BaggageItem({ item, id }: BaggageitemProps) {
  const dispatch = useDispatch();
  const onDelete = (id: string) => {
    dispatch({ type: "DELETE", payload: { id } });
  };
  return (
    <li className="flex items-center justify-between m-1 p-1 hover:scale-[1.005] ease-in duration-150 cursor-default">
      <p className="text-lg font-bold ">{item}</p>
      <button
        className="transition-color hover:text-green  ease-in duration-150 cursor-pointer"
        onClick={() => onDelete(id)}
      >
        <FaTrashAlt />
      </button>
    </li>
  );
}

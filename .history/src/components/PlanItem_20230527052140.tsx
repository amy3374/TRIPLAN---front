import React, { useRef, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdDragIndicator } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export type PlanItemProps = {
  item: string;
  id: string;
  onDelete: (id: string, key?: string) => void;
  dayId: string;
  time: number;
  onDragStart: (e: any, id: string, dayId: string) => void;
  onDrop: (id: string, dayId: string) => void;
};

export default function PlanItem({
  item,
  id,
  onDelete,
  dayId,
  time,
  onDragStart,
  onDrop,
}: PlanItemProps) {
  const dispatch = useDispatch();
  const plan = useSelector((state: any) => state.PlanList);

  const onDelete_re = (id: string, dayId: string) => {
    dispatch({ type: "DELETE_P", payload: { dayId, id } });
  };
  const [drag, setDrag] = useState<boolean>(false);
  const listRef = useRef<any>();
  const onDragStart_re = (e: any, id: string, dayId: string) => {
    dispatch({ type: "DRAG_START_P", payload: { dayId, id } });
  };

  const onDrop_re = (id: string, dayId: string) => {
    dispatch({ type: "DROP_P", payload: { dayId, id } });
  };
  return (
    <li
      ref={listRef}
      id={id}
      className={
        drag
          ? `flex items-center shadow-md  cursor-default`
          : `flex items-center hover:scale-[1.001] ease-in duration-150 cursor-default`
      }
      onDragStart={(e: any) => {
        onDragStart(e, listRef.current.id, dayId);
        onDragStart_re(e, listRef.current.id, dayId);
        setDrag(true);
      }}
      onDragEnd={(e: any) => {
        setDrag(false);
      }}
      onDragOver={(e: any) => {
        e.preventDefault();
        setDrag(true);
      }}
      onDragLeave={(e: any) => {
        // e.preventDefault();
        setDrag(false);
      }}
      onDrop={(e: any) => {
        // e.preventDefault();
        //  console.log(listRef.current.id);
        setDrag(false);
        onDrop(listRef.current.id, dayId);
        onDrop_re(listRef.current.id, dayId);
      }}
    >
      <div draggable className="m-2 text-stone-200 text-2xl">
        <MdDragIndicator />
      </div>
      <p className={"text-lg w-full p-0.5"}>{item}</p>
      <button
        className=" transition-color hover:text-pink  ease-in duration-150 cursor-pointer"
        onClick={() => {
          onDelete(id, dayId);
          onDelete_re(id, dayId);
        }}
      >
        <FaTrashAlt />
      </button>
    </li>
  );
}

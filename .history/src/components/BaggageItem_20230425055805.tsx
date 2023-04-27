import React from "react";
import { RxCross2 } from "react-icons/rx";

export type BaggageitemProps = {
  item: string;
  id: number;
};

export default function BaggageItem({ item, id }: BaggageitemProps) {
  return (
    <li>
      <div>
        <p>{item}</p>
        <button>
          <RxCross2 className="text-slate-500 font-serif" />
        </button>
      </div>
    </li>
  );
}

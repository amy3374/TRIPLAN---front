import React from "react";
import { ImCross } from "react-icons/im";

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
          <ImCross />
        </button>
      </div>
    </li>
  );
}

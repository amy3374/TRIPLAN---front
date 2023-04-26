import React from "react";
import { RxCross2 } from "react-icons";

export type BaggageitemProps = {
  item: string;
  id: number;
};

export default function BaggageItem({ item, id }: BaggageitemProps) {
  return (
    <li>
      <div>
        <p>{item}</p>
      </div>
    </li>
  );
}

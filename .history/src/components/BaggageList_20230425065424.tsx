import React from "react";
import BaggageItem, { BaggageitemProps } from "./BaggageItem";

type BaggageListProps = {
  list: BaggageitemProps[];
  delete: void;
};

export default function BaggageList({ list, delete }: BaggageListProps) {
  return (
    <ul className="m-2 mb-4">
      {list.map((item) => (
        <BaggageItem {...item} key={item.id} />
      ))}
    </ul>
  );
}

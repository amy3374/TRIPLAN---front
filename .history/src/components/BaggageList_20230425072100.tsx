import React from "react";
import BaggageItem, { BaggageitemProps } from "./BaggageItem";

type BaggageListProps = {
  list: BaggageitemProps[];
  onDelete: (item: BaggageitemProps) => void;
};

export default function BaggageList({ list, onDelete }: BaggageListProps) {
  return (
    <ul className="m-2 mb-4">
      {list.map((item) => (
        <BaggageItem {...item} key={item.id} />
      ))}
    </ul>
  );
}

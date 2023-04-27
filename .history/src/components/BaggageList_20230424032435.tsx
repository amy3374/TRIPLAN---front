import React from "react";
import BaggageItem, { BaggageitemProps } from "./BaggageItem";

type BaggageListProps = {
  list: BaggageitemProps[];
};

export default function BaggageList({ list }: BaggageListProps) {
  return (
    <ul>
      {list.map((item) => (
        <BaggageItem {...item} key={item.id} />
      ))}
    </ul>
  );
}

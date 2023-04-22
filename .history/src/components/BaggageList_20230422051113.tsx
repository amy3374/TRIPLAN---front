import React from "react";
import BaggageItem, { BaggageitemProps } from "./BaggageItem";

type BaggageListProps = {
  list: BaggageitemProps[];
};

const BaggageList: React.FC<BaggageListProps> = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <BaggageItem item={item.item} key={item.id} id={item.id} />
      ))}
    </ul>
  );
};

export default BaggageList;

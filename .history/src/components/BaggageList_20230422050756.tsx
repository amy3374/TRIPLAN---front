import React from "react";
import BaggageItem, { BaggageitemProps } from "./BaggageItem";

type BaggageListProps = {
  list: BaggageitemProps[];
};

const BaggageList: React.FC<BaggageListProps> = ({ list }) => {
  console.log(list.map((item) => typeof item));

  return (
    <ul>
      {list.map((item) => (
        <BaggageItem item={item} />
      ))}
    </ul>
  );
};

export default BaggageList;

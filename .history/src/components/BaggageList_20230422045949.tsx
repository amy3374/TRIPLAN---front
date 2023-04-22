import React from "react";
import BaggageItem, { BaggageitemProps } from "./BaggageItem";

type BaggageListProps = {
  list: BaggageitemProps[];
};

const BaggageList: React.FC<BaggageListProps> = ({ list }) => {
  return (
    <ul>
      {list.map((item) => {
        return <BaggageItem item={item} />;
      })}
    </ul>
  );
};

export default BaggageList;

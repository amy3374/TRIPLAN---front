import React from "react";
import BaggageItem, { BaggageitemProps } from "./BaggageItem";

type BaggageListProps = {
  list: BaggageitemProps[];
};

const BaggageList: React.FC<BaggageListProps> = ({ list }) => {
  return (
    <ul>
      {list.map((it) => {
        return <BaggageItem item={it} />;
      })}
    </ul>
  );
};

export default BaggageList;

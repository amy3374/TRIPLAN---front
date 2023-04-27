import React from "react";
import BaggageItem, { BaggageitemProps } from "./BaggageItem";

const BaggageList: React.FC<BaggageitemProps[]> = ({ list }) => {
  return (
    <li>
      {list.map((item) => (
        <BaggageItem item={item} />
      ))}
    </li>
  );
};

export default BaggageList;

import React from "react";
import { BaggageitemProps } from "./BaggageItem";

type BaggageListProps = {
  list: BaggageitemProps[];
};

const BaggageList: React.FC<BaggageListProps> = ({ list }) => {
  return <ul>{list.map((item) => 1)}</ul>;
};

export default BaggageList;

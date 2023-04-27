import React from "react";
import { BaggageitemProps } from "./BaggageItem";

type BaggageListProps = {
  list: String[];
};

const BaggageList: React.FC<BaggageListProps> = ({ list }) => {
  return <ul>{list.map((item) => item)}</ul>;
};

export default BaggageList;

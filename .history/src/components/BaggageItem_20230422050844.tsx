import React from "react";

export type BaggageitemProps = {
  item: string;
  id: number;
};

const BaggageItem: React.FC<BaggageitemProps> = ({ item }) => (
  <div>Hello, {item}</div>
);

export default BaggageItem;

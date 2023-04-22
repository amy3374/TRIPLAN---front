import React from "react";

type BaggageitemProps = {
  item: string;
};

const BaggageItem: React.FC<BaggageitemProps> = ({ item }) => (
  <div>Hello, {item}</div>
);

export default BaggageItem;

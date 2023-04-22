import React from "react";

export type BaggageitemProps = {
  item: string;
  id: number;
};

const BaggageItem: React.FC<BaggageitemProps> = ({ item, id }) => (
  <div>Hello, {id}</div>
);

export default BaggageItem;

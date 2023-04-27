import React from "react";

export type BaggageitemProps = {
  item: string;
  id: number;
};

const BaggageItem: React.FC<BaggageitemProps> = ({ item, id }) => (
  <div> {item}</div>
);

export default BaggageItem;

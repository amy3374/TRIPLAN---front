import React from "react";

type BaggageListProps = {
  list: string[];
};

const BaggageList: React.FC<BaggageListProps> = ({ list }) => {
  <li>{list.map((item) => item)}</li>;
};

export default BaggageList;

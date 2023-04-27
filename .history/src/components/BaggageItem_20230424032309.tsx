import React from "react";

export type BaggageitemProps = {
  item: string;
  id: number;
};

export default function BaggageItem({ item, id }: BaggageitemProps) {
  return (
    <div>
      <div> {item}</div>
    </div>
  );
}

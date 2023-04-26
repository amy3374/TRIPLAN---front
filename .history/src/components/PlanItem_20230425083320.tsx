import React from "react";

export type PlanItemProps = {
  item: string;
  id: string;
  onDelete: (id: string) => void;
};

export default function PlanItem({ item, id, onDelete }: PlanItemProps) {
  return <div>{item}</div>;
}

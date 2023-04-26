import React, { useState } from "react";
import { planInfo } from "../pages/Home";
import PlanDaily from "./PlanDaily";
import { v4 } from "uuid";
interface plandata {
  content: string;
  planInfo: planInfo;
}

export default function PlanBox({ content, planInfo }: plandata) {
  const [data, setData] = useState<string>(content);

  const dataRefine = (content: string): string[] => {
    return content.split(/DAY [0-9]:/).slice(1);
  };

  return (
    <section>
      <div className="bg-pink rounded-lg p-2 text-md font-bold text-center">
        {`${planInfo.des}  ${planInfo.schedule}`}
      </div>
      <div className="border p-3 mt-3 border-stone-300 rounded-lg">
        {dataRefine(content).map((item, i) => {
          return <PlanDaily key={v4()} day={i} content={item} />;
        })}
      </div>
    </section>
  );
}

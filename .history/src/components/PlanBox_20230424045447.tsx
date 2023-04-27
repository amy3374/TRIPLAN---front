import React, { useState } from "react";
import { planInfo } from "../pages/Home";
import PlanDaily from "./PlanDaily";

interface plandata {
  content: string;
  planInfo: planInfo;
}

export default function PlanBox({ content, planInfo }: plandata) {
  const [data, setData] = useState<string>(content);

  const dataRefine = (data: string): string[] => {
    return data.split(/DAY [0-9]:/);
  };
  console.log(dataRefine(content)[2].charAt(1));

  return (
    <section>
      <div className="bg-pink rounded-lg p-2 text-md font-bold text-center">
        {`${planInfo.des}  ${planInfo.schedule}`}
      </div>
      <div className="border p-3 mt-3 border-stone-300 rounded-lg">
        {dataRefine(data).map((item, i) => {
          return (
            <PlanDaily
              key={item.charAt(1)}
              id={parseInt(item.charAt(1))}
              content={item}
            />
          );
        })}
      </div>
    </section>
  );
}

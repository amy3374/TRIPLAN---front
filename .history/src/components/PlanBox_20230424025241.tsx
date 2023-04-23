import React, { useState } from "react";
import { planInfo } from "../pages/Home";

interface plandata {
  content: string;
  planInfo: planInfo;
}

export default function PlanBox({ content, planInfo }: plandata) {
  const [data, setData] = useState<string>(content);

  const dataRefine = (data: string): string[] => {
    return data.split("");
  };

  return (
    <section>
      <div className="bg-pink rounded-lg p-2 text-md font-bold text-center">
        {`${planInfo.des}  ${planInfo.schedule}`}
      </div>
      <div className="border p-3 mt-3 border-stone-300 rounded-lg">{data}</div>
    </section>
  );
}

import React, { useState } from "react";

interface plandata {
  content?: string;
}

export default function PlanBox({ content }) {
  const [data, setData] = useState<string>(content);

  const dataRefine = (data: string): string[] => {
    return data.split(".");
  };

  // console.log(dataRefine(data));

  return (
    <section>
      <div className="bg-pink rounded-lg p-2 text-md font-bold text-center">
        속초 3박 4일
      </div>
      <div className="border p-3 mt-3 border-stone-300 rounded-lg">
        {dataRefine(data).map((item) => {
          return <div>{item}</div>;
        })}
      </div>
    </section>
  );
}

import React from "react";

interface reviewProps {
  content: string;
}

export default function Review({ content }: reviewProps) {
  return (
    <section>
      <div className="bg-stone-300 rounded-lg p-2 text-md font-bold text-center">
        후기
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </section>
  );
}

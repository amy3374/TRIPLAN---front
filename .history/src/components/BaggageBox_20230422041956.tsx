import React from "react";

export default function BaggageBox() {
  return (
    <section>
      <div className="bg-ligntgreen rounded-lg p-2 text-md font-bold text-center">
        준비물
      </div>
      <div className="border p-3 mt-3 border-stone-300 rounded-lg">
        <div>
          <Input />
        </div>
      </div>
    </section>
  );
}

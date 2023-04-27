import React from "react";

export default function Input() {
  return (
    <div>
      <input
        className="outline-none border p-2 rounded-lg border-stone-300 mr-2"
        type="text"
      />
      <button className="bg-green p-2 rounded-lg text-white">등록</button>
    </div>
  );
}

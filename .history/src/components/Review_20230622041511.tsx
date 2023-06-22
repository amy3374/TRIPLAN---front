import React, { useState } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

interface reviewProps {
  content: string;
}

export default function Review({ content }: reviewProps) {
  const [show, setShow] = useState<boolean>(false);
  return (
    <section>
      <div className="flex items-center justify-center  bg-stone-300 rounded-lg p-2 text-md font-bold text-center">
        후기
        <button className="text-lg">
          {show ? <BsFillCaretDownFill /> : <BsFillCaretUpFill />}
        </button>
      </div>
      <div
        className=" border p-3 mt-3 border-stone-300 rounded-lg "
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </section>
  );
}

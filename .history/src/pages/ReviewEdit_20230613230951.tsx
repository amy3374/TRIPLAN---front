import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function ReviewEdit() {
  const handleClick = () => {};
  return (
    <div>
      <Editor />
      <button
        onClick={handleClick}
        className="bg-green p-2 text-white rounded-lg m-2 w-14 self-end"
      >
        후기
      </button>
    </div>
  );
}

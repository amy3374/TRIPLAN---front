import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function ReviewEdit() {
  const handleClick = () => {
    console.log(editorState);
  };
  const [editorState, setEditorState] = useState<any>(
    EditorState.createEmpty()
  );
  const onEditorStateChange = (editorState: any) => {
    // editorState에 값 설정
    setEditorState(editorState);
  };
  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />
      <button
        onClick={handleClick}
        className="bg-green p-2 text-white rounded-lg m-2 w-14 self-end"
      >
        후기
      </button>
    </div>
  );
}

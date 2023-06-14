import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function ReviewEdit() {
  const handleClick = () => {
    console.log(editorToHtml);
  };
  const [editorState, setEditorState] = useState<any>(
    EditorState.createEmpty()
  );
  const onEditorStateChange = (editorState: any) => {
    // editorState에 값 설정
    setEditorState(editorState);
  };
  const editorToHtml = draftToHtml(
    convertToRaw(editorState.getCurrentContent())
  );
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
        저장
      </button>
      <div dangerouslySetInnerHTML={{ __html: editorToHtml }}></div>
    </div>
  );
}

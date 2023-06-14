import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { saveReview } from "../components/api/database";
import { useLocation, useParams } from "react-router-dom";

export default function ReviewEdit() {
  const { id } = useParams();
  const location = useLocation();
  const handleClick = () => {
    saveReview(id as string, editorToHtml);
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
  useEffect(() => {
    const blocksFromHtml = htmlToDraft(location.state.review);
    if (blocksFromHtml) {
      const { contentBlocks, entityMap } = blocksFromHtml;
      // https://draftjs.org/docs/api-reference-content-state/#createfromblockarray
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap
      );
      // ContentState를 EditorState기반으로 새 개체를 반환.
      // https://draftjs.org/docs/api-reference-editor-state/#createwithcontent
      const editorState = EditorState.createWithContent(contentState);
      setEditorState(editorState);
    }
  }, []);

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
    </div>
  );
}

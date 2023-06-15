import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { saveReview } from "../components/api/database";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

export default function ReviewEdit() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    saveReview(id as string, editorToHtml);
    navigate(-1);
  };

  const [editorState, setEditorState] = useState<any>(
    EditorState.createEmpty()
  );
  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState);
  };
  const editorToHtml = draftToHtml(
    convertToRaw(editorState.getCurrentContent())
  );

  useEffect(() => {
    if (location.state.review) {
      const blocksFromHtml = htmlToDraft(location.state.review);
      if (blocksFromHtml) {
        const { contentBlocks, entityMap } = blocksFromHtml;

        const contentState = ContentState.createFromBlockArray(
          contentBlocks,
          entityMap
        );

        const editorState = EditorState.createWithContent(contentState);
        setEditorState(editorState);
      }
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
      <div
        className=" border p-3 mt-3 border-stone-300 rounded-lg "
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}

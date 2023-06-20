import React, { useState, useEffect, useRef } from "react";

import { saveReview } from "../components/api/database";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import SunEditor from "suneditor-react";
import SunEditorCore from "suneditor/src/lib/core";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import suneditor from "suneditor";

suneditor.create("sample", {
  buttonList: [
    ["undo", "redo", "removeFormat"],
    [align, font, fontSize, fontColor, hiliteColor],
    [horizontalRule, image, template],
  ],
});

export default function ReviewEdit() {
  const { id } = useParams();
  const location = useLocation();
  const [content, setContent] = useState<string>();
  const navigate = useNavigate();

  const handleClick = () => {
    saveReview(id as string, content as string);
    navigate(-1);
  };

  const handleChange = (content: string) => {
    setContent(content);
  };

  const editor = useRef<SunEditorCore>();

  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    editor.current = sunEditor;
  };

  useEffect(() => {}, []);

  return (
    <div>
      <SunEditor
        getSunEditorInstance={getSunEditorInstance}
        onChange={handleChange}
        defaultValue={location.state.review && location.state.review}
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

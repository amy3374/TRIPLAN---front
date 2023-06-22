import React, { useState, useEffect, useRef } from "react";

import { saveReview } from "../components/api/database";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import SunEditor from "suneditor-react";
import SunEditorCore from "suneditor/src/lib/core";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

export default function ReviewEdit() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  const handleChange = (content: any) => {
    console.log(content); //Get Content Inside Editor
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

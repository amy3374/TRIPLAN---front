import React, { useState, useEffect } from "react";

import { saveReview } from "../components/api/database";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import "suneditor/dist/css/suneditor.min.css";
// import 'suneditor/assets/css/suneditor.css'
// import 'suneditor/assets/css/suneditor-contents.css'
import suneditor from "suneditor";

// How to import plugins
import image from "suneditor/src/plugins/dialog/link";
import list from "suneditor/src/plugins/submenu/list";
import { font, video } from "suneditor/src/plugins";

// How to import language files (default: en)
import lang from "suneditor/src/lang";
import { ko } from "suneditor/src/lang";
import de from "suneditor/src/lang/de";
import SunEditor from "suneditor/src/lib/core";

suneditor.create("sample", {
  plugins: [font, video, image, list],
  buttonList: [["font", "video", "image", "list"]],
  lang: lang.ko,
});

export default function ReviewEdit() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-green p-2 text-white rounded-lg m-2 w-14 self-end"
      >
        저장
      </button>
    </div>
  );
}

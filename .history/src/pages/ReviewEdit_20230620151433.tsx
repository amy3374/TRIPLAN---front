import React, { useState, useEffect } from "react";

import { saveReview } from "../components/api/database";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

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
      <SunEditor height="500px" />
      <button
        onClick={handleClick}
        className="bg-green p-2 text-white rounded-lg m-2 w-14 self-end"
      >
        저장
      </button>
    </div>
  );
}

import React from "react";

interface reviewProps {
  content: string;
}

export default function Review({ content }: reviewProps) {
  return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
}

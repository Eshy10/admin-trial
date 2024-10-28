import React, { useState } from "react";
import dynamic from "next/dynamic";
import DOMPurify from "isomorphic-dompurify";
import "quill/dist/quill.snow.css";
import EditorToolbar, { formats, modules } from "./edittorToolbar";
import { TextEditor } from "./editor.styles";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const RequestEditor = ({ value = '', handleChange }) => {
  const handleChangeQuill = (val) => {
    const cleaned = DOMPurify.sanitize(val);
    handleChange(cleaned); 
  };

  return (
    <TextEditor>
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={value}
        onChange={(val) => handleChangeQuill(val)}
        placeholder={"Write something"}
        modules={modules}
        formats={formats}
      />
    </TextEditor>
  );
};

export default RequestEditor;

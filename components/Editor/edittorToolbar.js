import React from "react";

// Modules object for setting up the Quill editor
export const modules = {
  toolbar: {
    container: "#toolbar",
  },
  keyboard: {
    bindings: {
      tab: false,
      handleEnter: {
        key: 13,
        handler: function () {
          // Do nothing
        },
      },
    },
  },
};

// Formats objects for setting up the Quill editor
export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "link",
  "image",
  "color",
  "code-block",
];

// Quill Toolbar component
export const QuillToolbar = () => (
  <div id="toolbar">
    <span className="ql-formats">
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <button className="ql-strike" />
      <button className="ql-code-block" />
      <button className="ql-list" value="ordered" />
      <button className="ql-list" value="bullet" />
      <button className="ql-indent" value="-1" />
      <button className="ql-indent" value="+1" />
      <button className="ql-link" />
      <button className="ql-image" />
      <button className="ql-video" />
      <button className="ql-script" value="super" />
      <button className="ql-script" value="sub" />
      <button className="ql-blockquote" />
      <button className="ql-direction" />
      <button className="ql-formula" />
      <button className="ql-code-block" />
      <button className="ql-clean" />
    </span>
  </div>
);

export default QuillToolbar;

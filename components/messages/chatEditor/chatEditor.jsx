import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import DOMPurify from "isomorphic-dompurify";
import "quill/dist/quill.snow.css";
import EditorToolbar, { formats, modules } from "./Toolbar"
import { SendButton, ButtonContainer } from './editor.styles'
import { validMessage } from "@/utils/String";

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");

    return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />;
  },
  {
    ssr: false
  }
);

const ChatEditor = ({ value = '', files = [], handleFileChange, handleChange, handleSendMessage }) => {
  const quillRef = useRef();
  const handleChangeQuill = (val) => {
    const cleaned = DOMPurify.sanitize(val);
    handleChange(cleaned);
    console.log(cleaned)
  };

  const [prevKey, setKey] = useState(null)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && prevKey !== 'Shift') {
        e.preventDefault()
        if (validMessage(value) || files?.length > 0) {
          handleSendMessage();
        }
      }

      setKey(e.key)
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [value, files]);


  const handleEmojiSelect = (emoji) => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      const cursorPosition = quill.getSelection()?.index || 0;

      // Insert the emoji at the cursor position
      quill.insertText(cursorPosition, emoji.native);

      // Set the new cursor position after the inserted emoji
      quill.setSelection(cursorPosition + emoji.native.length);
    }
  };

  return (
    <div className='chat-editor' style={{ position: 'relative' }}>
      <EditorToolbar handleEmojiSelect={handleEmojiSelect} files={files} setFiles={handleFileChange} />
      <ReactQuill
        theme="snow"
        value={value}
        onChange={(val) => handleChangeQuill(val)}
        placeholder={"Write something"}
        modules={modules}
        formats={formats}
        forwardedRef={quillRef}
      />
      <ButtonContainer>
        {
          validMessage(value) || files?.length > 0 ?
            <SendButton type="Primary" onClick={() => handleSendMessage()}><span>SEND</span></SendButton>
            :
            <SendButton><span>SEND</span></SendButton>
        }
      </ButtonContainer>
    </div>
  );
};

export default ChatEditor;

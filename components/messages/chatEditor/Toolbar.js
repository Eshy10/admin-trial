import React, { useRef, useEffect, useState } from "react";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import {
  FileModalContainer,
  EmojiIcon,
  EmojiPickerContainer,
  Upload,
  FileIcon,
  PhotoIcon,
  UploadedImage,
  UploadedFile
} from "./editor.styles";

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
  "font",
  "size",
  "color",
  "bold",
  "underline",
  "italic",
  "strike",
  "align",
  "list",
  "link",
  "image",
];

// Quill Toolbar component
export const QuillToolbar = ({files, setFiles, handleEmojiSelect }) => {
  const photoInputRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleRemove = (id) => {
    setFiles((files) => {
      const newFiles = [...files]
      newFiles.splice(id, 1)
      return newFiles
    })
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setFiles((files) => [...files, ["Photo", imageUrl, imageFile]])
    }
    e.target.value = null;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Check if the selected file is a PDF or a music file (e.g., mp3)
    if (file?.type === 'application/pdf') {
      setFiles((files) => [...files, ["PDF", file.name, file]])
    }
    else if (file?.type.startsWith('audio/')) {
      setFiles((files) => [...files, ["Audio", file.name, file]])
    } else {
      // Display an error message or handle the case when an invalid file is selected
      console.error('Invalid file format. Please select a PDF or a music file.');
    }
    // Reset the file input to allow selecting the same file again
    e.target.value = null;
  };

  const handleUpload = (type) => {
    const index = {
      'Photo': photoInputRef,
      'File': fileInputRef
    }

    if (index[type].current) {
      index[type].current.click();
    }
  };


  const [showPicker, setShowPicker] = useState(false)

  return (
    <div id="toolbar" style={{ display: 'flex', width: '100%', background: '#F9F9F9', border: '0px', justifyContent: "center", position: "relative" }}>
      {
        files?.length > 0 &&
        <FileModalContainer>
          {
            files.map((uploadedFile, index) => {
              const [type, info, file] = uploadedFile
              if (type === "Photo") {
                return <UploadedImage src={info} key={index} remove={() => handleRemove(index)} />
              }
              else {
                return <UploadedFile key={index} remove={() => handleRemove(index)} type={type} name={info} />
              }
            })
          }
        </FileModalContainer>
      }
      <span className="ql-formats" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', width: '100%', flexWrap: 'wrap', justifyContent: 'center', alignItems: "center", }}>
        <select className="ql-size" style={{ height: '25px', width: '100px' }} />
        <select className="ql-color" style={{ height: '25px', width: '30px' }} />
        <button className="ql-bold" style={{ height: '25px', width: '30px' }} />
        <button className="ql-underline" style={{ height: '25px', width: '30px' }} />
        <button className="ql-italic" style={{ height: '25px', width: '30px' }} />
        <button className="ql-strike" style={{ height: '25px', width: '30px' }} />
        <select className="ql-align" style={{ height: '25px', width: '30px' }} />
        <button className="ql-list" value="ordered" style={{ height: '25px', width: '30px' }} />
        <button className="ql-list" value="bullet" style={{ height: '25px', width: '30px' }} />

        <EmojiIcon onClick={() => setShowPicker((showPicker) => !showPicker)} />
        {
          showPicker &&
          <EmojiPickerContainer>
            <Picker
              theme='light'
              data={data}
              onEmojiSelect={(e) => { handleEmojiSelect(e); setShowPicker(false); }}
              emojiTooltip={false}
              navPosition="bottom"
              previewPosition="none"
              style={{ background: 'white', border: '1px solid #FFF', zIndex: 99999999 }}
            />
          </EmojiPickerContainer>
        }

        <PhotoIcon onClick={() => handleUpload('Photo')} />
        <Upload
          id="uploadPhoto"
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          ref={photoInputRef}
        />

        <FileIcon onClick={() => handleUpload('File')} />
        <Upload
          id="uploadFile"
          type="file"
          onChange={handleFileChange}
          accept=".pdf, audio/*"
          ref={fileInputRef}
        />
      </span>
    </div>
  )
}

export default QuillToolbar;
import React from "react";
import { StyledFileInput, ProfilePhotoContainer, AvatarImage } from "./fileInput.styles"

const FileInput = ({ onChange, imageUrl }) => {
    return (
      <StyledFileInput>
        <ProfilePhotoContainer>
            <AvatarImage src={imageUrl} alt="Avatar" />             
        </ProfilePhotoContainer>
        <input type="file" onChange={onChange} style={{ display: 'none' }} />
      </StyledFileInput>
    );
  };
  
  export default FileInput;
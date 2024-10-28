import styled from 'styled-components';

const StyledFileInput = styled.label`
  display: inline-block;
  cursor: pointer;
  border-radius: 50%;
  overflow: hidden;
`;

const ProfilePhotoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const AvatarImage  = styled.img.attrs({
    src: "/assets/Image-Upload.png",
    alt: "Image upload icon",
    })`
    height: 7rem;
    `;

export  {
    StyledFileInput,
    ProfilePhotoContainer,
    AvatarImage
}
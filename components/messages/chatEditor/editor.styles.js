import styled from 'styled-components';
import { display, space, width } from 'styled-system';
import { Button } from '../messages.styles';

const FileModalContainer = styled.div`
  position: absolute;
  bottom: 44px;
  padding: 20px 0 20px 20px;
  opacity: 90%;
  left: 0px;
  background-color: white;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 10px;

  @media (min-width: 990px) and (max-width: 1200px), (max-width: 650px) {
    bottom: 80px;
  }  
`;

const CloseIcon = styled.img.attrs(() => ({
    src: "/assets/close-circle-fill.svg",
    alt: 'remove file'
}))`    
    height: 24px;  
    width: 24px; 
    cursor: pointer;   
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 10px;
  width: fit-content;
`;

const Image = styled.img.attrs(({ src }) => ({
    src: src,
    alt: 'Uploaded Image'
}))`
    height: auto;  
    width: auto;    
    max-height: 120px; 
    border-radius: 10px;
    `;

const UploadedImage = ({ src, remove }) => {
    return (
        <ImageContainer>
            <Image src={src} />
            <CloseIcon onClick={() => remove()} />
        </ImageContainer>
    )
}

const DocumentContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 258px;
`;

const Icon = styled.img.attrs(({ type }) => ({
    src: type === "PDF" ? "/assets/pdf-fill.svg" : "/assets/image-fill.svg",
    alt: type === "PDF" ? "pdf icon" : "audio icon"
}))`
    height: 25px;  
    width: 25px;    
`;

const FileName = styled.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const UploadedFile = ({ type, name, remove }) => {
    return (
        <DocumentContainer>
            <Icon type={type} />
            <FileName>{name}</FileName>
            <CloseIcon onClick={() => remove()} />
        </DocumentContainer>
    )
}

const EmojiIcon = styled.img.attrs(() => ({
    src: "/assets/emoji.svg",
    alt: 'Emojis'
}))`
    width: 20px;
    height: 20px;
    border-radius: 24px;
    background-color: ${props => props.color};
    cursor: pointer;
  `;

const PhotoIcon = styled.img.attrs(() => ({
    src: "/assets/image.svg",
    alt: 'Images'
}))`
    width: 20px;
    height: 20px;
    border-radius: 24px;
    background-color: ${props => props.color};
    cursor: pointer;
  `;

const FileIcon = styled.img.attrs(() => ({
    src: "/assets/link.svg",
    alt: 'Files'
}))`
    width: 20px;
    height: 20px;
    border-radius: 24px;
    background-color: ${props => props.color};
    cursor: pointer;
  `;

const EmojiPickerContainer = styled.div`
  position: absolute;
  bottom: 44px;
  background-color: white;
  z-index: 1000;

  & .emoji-mart {
    background: white;
    border: 1px solid #FFF;
    z-index: 1001;
  }

  @media (min-width: 990px) and (max-width: 1200px), (max-width: 650px) {
    bottom: 80px;
  }  
`;

const Upload = styled.input`
display: none;

position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0);
border: 0;
`

const SendButton = styled(Button)`
    @media (max-width: 1200px) {
        padding: 5px;
        :first-child {
            display: none; /* Hide the text when the screen width is less than or equal to 990 pixels */
          }
        &::before {
            content: url('/assets/arrow-right-white.svg'); 
            display: inline-block;
            transform: rotate(180);
            width: 20px; 
            height: 20px; 
          }
      
    }
`;

const ButtonContainer = styled.div`
    position: absolute; 
    right: 16px;
    bottom: 14px;

    @media (max-width: 900px) {
        right: 5px;
        bottom: 5px;
    }
`

export {
    FileModalContainer,
    UploadedImage,
    UploadedFile,
    EmojiPickerContainer,
    EmojiIcon,
    SendButton,
    ButtonContainer,
    PhotoIcon,
    FileIcon,
    Upload
};

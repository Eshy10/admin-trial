import styled from 'styled-components';
import { display, space, width } from "styled-system";

const Wrapper = styled.main`
    position: fixed; 
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 17, 34, 0.50);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden; /* Prevent scrolling */
    z-index: 1000;
`;

const MainBody = styled.div`
    width: 510px;
    display: flex;
    padding: 30px;
    flex-direction: column;
    gap: 30px;
    border-radius: 20px;
    background: var(--Neutral-Variant1, #FFF);

    @media (max-width: 600px) {
        width: 90%;
    }
`;

const CloseButton = styled.img.attrs(() => ({
    src: '/assets/close-icon.png',
    alt: 'Back Icon'
}))`
    width: 20px;
    height:20px;
    align-self: flex-end;
    margin-bottom: -20px;
    cursor: pointer;
`;

const Heading = styled.h2`
    color: rgb(0, 1, 2);
    text-align: center;
    font-family: Poppins;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 40.45px;
    letter-spacing: 0.5px;
    margin: 0;
`

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

const ContactField = styled.div`
    width: 100%;
    padding: 13px 15px;
    border-radius: 10px;
    border: 1px solid var(--Neutral2, #AAACA6);
    background: var(--Neutral-Variant1, #FFF);
    height: 55px;
`;

const Contact = styled.span`
    display: flex;
    width: fit-content;
    align-items: center;
    border-radius: 5px;
    background: var(--Neutral-Variant3, #F2F2F2);
    padding: 5px 10px;

    color: var(--Neutral4, #454843);
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px;
    letter-spacing: 0.24px;
`

const Remove = styled.img.attrs(() => ({
    src: '/assets/close-icon.png',
    alt: 'Remove Contact'
}))`
    width: 15px;
    height:15px;
    margin-left: 15px;
    cursor: pointer;
`;

const SearchField = styled.input`
    width: 100%;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid var(--Neutral2, #AAACA6);
    background: var(--Neutral-Variant1, #FFF);
    color: var(--PlaceholderColor, #999999);
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px;
    letter-spacing: 0.3px;
    height: 55px;

    ::placeholder {
        color: var(--Neutral2, #AAACA6);
        font-style: italic;
    }
`;

const ButtonContainer = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center;
    gap: 20px;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`

const OptionContainer = styled.div`
  overflow-y: auto; 
  max-height: 165px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  /* Styles for customizing the scrollbar in Firefox */
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  /* Styles for customizing the scrollbar in WebKit-based browsers */
  &::-webkit-scrollbar {
    width: 5px; /* Adjust the width of the scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent; /* Adjust the color of the scrollbar thumb */
  }

  padding: 15px 0px;
  gap: 15px;

  border-radius: 10px;
  border: 1px solid #F2F2F2;

  /* Add this to scroll to the top when new options are rendered */
  scroll-behavior: smooth;
  scroll-snap-type: y proximity;
  overscroll-behavior-y: contain;

  /* Optional: Add this to adjust the speed of scrolling */
  scroll-snap-stop: always;

  /* Optional: Add this to handle momentum scrolling */
  touch-action: pan-y;
`;

const Option = styled.div`  
    width: 100%;
    display: flex;
    padding: 5px 15px;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    cursor: pointer;
    background: ${(props) => props.$selected ? 'var(--Neutral-Variant3, #F2F2F2)' : 'var(--Neutral-Variant3, #FFFFFF)'};    
`

const PictureContainer = styled.div`
    position: relative;
`

const DisplayPicture = styled.img.attrs(({ src, name }) => ({
    src: src,
    alt: `${name}'s Image`
}))`
    float: left;
    width: 40px;
    height: 40px;
    border-radius:40px;
    object-fit: cover;
`;

const Name = styled.span`
    color: var(--Neutral5, #012);
    /* Headline 3 */
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 24.27px; /* 161.8% */
    letter-spacing: 0.3px;
`

const Email = styled.span`
    color: var(--Neutral4, #454843);
    /* Paragraph 3 */
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px; /* 161.8% */
    letter-spacing: 0.3px;
`

export {
    Wrapper,
    MainBody,
    CloseButton,
    Heading,
    ContactField,
    Contact,
    Remove,
    SearchField,
    SearchContainer,
    OptionContainer,
    Option,
    ButtonContainer,
    DisplayPicture,
    PictureContainer,
    Name,
    Email
}
import styled from 'styled-components';
import { space } from "styled-system";

const ArtistWrapper = styled.div`
`;

const BackContainer = styled.div`
     display: flex;
    align-items: center;
    cursor: pointer;
    @media screen and (max-width: 48em){
        padding: 10px;
    }
    @media screen and (max-width: 26.5625em){
        padding-left: 0.9rem;
    }
`;

const BackText = styled.p`
    padding-left: 0.6rem;
    font-size: 13px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: 22.652px; /* 161.8% */
    letter-spacing: 0.7px;
    colorr: #012;
    cursor: pointer;
`;

const BackIcon = styled.img.attrs({
    src: "/assets/back.png",
    alt: "Back icon",
    })`
    height: 1rem;
    `;

const ArtistFormContainer = styled.div`
   margin: 2rem auto;
    width: 55%;
    max-height: 85vh;
    overflow: auto;
    border-radius: 20px;
    border: 1px solid #AAACA6;
    padding-bottom: 2rem;
    @media (max-width: 64em) {
        width: 94%;
    }
`;

const InnerArtistContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 2rem; 
    margin-top: -2rem; 

    @media screen and (max-width: 26.5625em){
        align-items: center;
        padding-left: 0rem; 
    }
     @media screen and (max-width: 23.4375em){
       
    }
     @media screen and (max-width: 20em){
       
    }
`;
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom:  ${(props) => (props.newmargin ? "0.5rem" : "")};
`;

const FormLabel = styled.p`
    font-family: Poppins, sans-serif;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.62;
    letter-spacing: 0.3px;
    color: #454843;
    margin-top:  ${(props) => (props.resetmargin ? "-0.7rem" : "")};
    
    @media screen and (max-width: 26.5625em){
        align-self: start;
        padding-left: 0.8rem;
        padding-top: 0.5rem;
    }
    @media (max-width: 20em) {
        font-size: 12px;
    }
`;

const FormInput = styled.input`
    width: 95%;
    padding: 0.7rem;
    border-radius: 10px;
    border: solid 1px #AAACA6;
    background-color: #fff;
    font-size: 13px;
    color: #484848;

    &:focus {
        outline: none;
    }
    &::placeholder {
        font-family: Poppins, sans-serif;    
        font-size: 13px;
        font-weight: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: left;
        color: #AAACA6;

    @media (max-width: 20em) {
        font-size: 12px;
    }
    }
`;
const PasswordFormInput = styled.input`
    width: 95%;
    padding: 0.7rem;
    border-radius: 10px;
    border: solid 1px #AAACA6;
    background-color: #fff;
    font-size: 13px;
    color: #484848;

    &:focus {
        outline: none;
    }
    &::placeholder {
        font-family: Poppins, sans-serif;    
        font-size: 13px;
        font-weight: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: left;
        color: #AAACA6;
    @media (max-width: 20em) {
        font-size: 12px;
    }
    }
    @media screen and (max-width: 26.5625em){
     margin-left: 0.6rem;
   }
`;
  
const GenderSelectField = styled.select`
    width: 94.8%;
    padding: 0.7rem;
    border-radius: 10px;
    border: solid 1px #AAACA6;
    background-color: #fff;
    font-size: 13px;
    color: #484848;
    font-family: Poppins, sans-serif;
    cursor: pointer;
   

    max-width: 100%;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-image: url("/assets/arrow-drop-down-line.png");
    background-repeat: no-repeat, repeat;

    /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
    background-position: right 1.4em top 50%, 0 0;
    /* icon size, then gradient */
    background-size: 1em auto, 100%;

    /* Hide arrow icon in IE browsers */
    ::-ms-expand {
    display: none;
    }

    /* Focus style */
    &:focus {
    /* It'd be nice to use -webkit-focus-ring-color here but it doesn't work on box-shadow */
    outline: none;
    }

    /* Set options to normal weight */
    option {
    font-weight: normal;
    color: black;
    }

    /* Support for rtl text, explicit support for Arabic and Hebrew */
    *[dir="rtl"],
    &:root:lang(ar),
    &:root:lang(iw) {
    background-position: left 1.4em top 50%, 0 0;
    }

    /* Disabled styles */
    &:disabled,
    [aria-disabled="true"] {
    background-image: url("/assets/arrow-drop-down-line.png");
    }

    &:disabled:hover,
    [aria-disabled="true"] {
    border-color: #aaa;
    }
    &:focus {
    outline: none;
    }

    @media screen and (min-width: 52em) {
    background-position: right 1.4em top 50%, 0 0;
    }

    @media screen and (max-width: 48em) {
   
    }
    @media (max-width: 23.4375em) {
  
    }
    @media screen and (max-width: 20em) {
   
    }
`;

const OutLineEyeContainer = styled.span`
    display: flex;
    align-items: center;
    margin-left: -2rem;
`;

const ArtistTitle = styled.h3`
    padding-top: 1.6rem;
    margin-bottom: 0rem;
    font-family: Poppins;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.6px;
    color: #012;
`;

const ArtistDescription = styled.p`
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.3px;
    color: #454843;
`;

const BarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 2rem;
      @media screen and (max-width: 48em){
           width: 100%;
    }
`;

const BarItem = styled.div`
    width: 30%;
    height: 8px;
    border-radius: 100000px;
    background-color:  ${(props) => (props.barbg ? "#3E46B6" : "#DADDFB")};
    margin-right: 0.8rem;
    @media screen and (max-width: 48em){
        width: 50%;
}
`;

const ProfilePhotoContainer = styled.div`
     display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2.8rem;
    padding-bottom: 2rem;
`;

const AvatarrIcon = styled.img.attrs({
    src: "/assets/Image-Upload.png",
    alt: "Image upload icon",
    })`
    height: 7rem;
    `;

const ProfilePicture = styled.div`
    background-image: url("/assets/Image Upload.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 120px;
    height: 120px;
    border-radius: 150px;
    background-color: #F9F9F9;
`;

const AvatarDescText = styled.p`
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px;
    letter-spacing: 0.3px;
    color: #3E46B6;
`;

const ButtonsWrapper = styled.div`
display: flex;
justify-content: space-between;
margin: 2rem auto;
width: 55%;
@media screen and (max-width: 48em){
    width: 61%; 
}

@media screen and (max-width: 20em){
    width: 80%; 
}
`;

const ArtistButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 2.5rem;
    padding: 0.6rem;
    border-radius: 100px;
    border: ${(props) => (props.artistborder ? "1px solid #3E46B6" : "none")};
    background-color:  ${(props) => (props.artistbutton ? "#3E46B6" : "#ffffff")};
    cursor: pointer;
    text-align: center;
    @media screen and (max-width: 64em){
        width:  ${(props) => (props.addartistbutton ? "50%" : "40%")};:
    }
    @media screen and (max-width: 26.5625em){
        width: 100%;
        margin-right: 1.5rem;
        padding: 0.6rem 1rem;
    }
    @media screen and (max-width: 23.4375em){
        margin-right: 0.8rem;
    }
`;

const ArtistButton = styled.p`
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 22.652px;
    letter-spacing: 0.7px;
    color:  ${(props) => (props.artistcolor ? "#3E46B6" : "#ffffff")};
    cursor: pointer;
    white-space: nowrap;
`;

const CloseIcon = styled.img.attrs({
    src: "/assets/close-line.png",
    alt: "Close icon",
    })`
    height: 1rem;
    `;
const NextIcon = styled.img.attrs({
    src: "/assets/arrow-right-artist.png",
    alt: "Next icon",
    })`
    height: 1rem;
    `;
  const StyledFileInput = styled.label`
    display: inline-block;
    cursor: pointer;
    border-radius: 50%;
    overflow: hidden;
  `;

export {
    ArtistWrapper,
    BackContainer,
    BackIcon,
    BackText,
    ArtistFormContainer,
    InnerArtistContainer,
    FormContainer,
    FormLabel,
    FormInput,
    PasswordFormInput,
    GenderSelectField,
    InputContainer,
    InputWrapper,
    OutLineEyeContainer,
    ArtistTitle,
    ArtistDescription,
    BarContainer,
    BarItem,
    ProfilePhotoContainer,
    AvatarrIcon,
    ProfilePicture ,
    AvatarDescText,
    ButtonsWrapper,
    ArtistButtonContainer,
    ArtistButton,
    CloseIcon,
    NextIcon,
}
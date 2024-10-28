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
        padding-left: 1.5rem;
    }
    @media screen and (max-width: 23.4375em){
        padding-left: 1.3rem;
    }
    @media (max-width: 20em) {
        padding-left: 1rem;
    }
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
    width: 170px;
    height: 8px;
    border-radius: 100000px;
    background-color:  ${(props) => (props.barbg ? "#3E46B6" : "#DADDFB")};
    margin-right: 0.8rem;
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
    width: 15%;
    height: 2.5rem;
    padding: 0rem; 0.6rem;
    border-radius: 100px;
    border: ${(props) => (props.artistborder ? "1px solid #3E46B6" : "none")};
    background-color:  ${(props) => (props.artistbutton ? "#3E46B6" : "#ffffff")};
    cursor: pointer;
    text-align: center;

     @media screen and (max-width: 64em) {
        width: 24%;
    }
     @media screen and (max-width: 26.5625em){
        width: 52%;
        margin-right: 1rem;
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
    padding-left: ${(props) => (props.leftpadding ? "0.5rem" : "")};
    padding-right: ${(props) => (props.rightpadding ? "0.5rem" : "")};
    @media screen and (max-width: 26.5625em){
        margin-right: 0.5rem;
    }
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

    const LocationContainer = styled.div`
    display: flex;
    align-items: center;
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
  const LocationIcon = styled.img.attrs({
    src: "/assets/search-location.png",
    alt: "Search Location icon",
    })`
    height: 1rem;
    margin-right: 0.5rem;
    `;
  
  const LocationInput = styled.input`
    flex-grow: 1;
    border: none;
    outline: none;
    color: #D8D8D8;

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
        color: #D8D8D8;

    @media (max-width: 20em) {
        font-size: 12px;
    }
    }
`;

const FacebookIcon = styled.img.attrs({
    src: "/assets/facebook-circle.png",
    alt: "Facebook icon",
    })`
    height: 1rem;
    margin-right: 0.5rem;
    `;
const InstagramIcon = styled.img.attrs({
    src: "/assets/instagram-fill.png",
    alt: "Instagram icon",
    })`
    height: 1rem;
    margin-right: 0.5rem;
    `;
const TwitterIcon = styled.img.attrs({
    src: "/assets/twitter-fill.png",
    alt: "Twitter icon",
    })`
    height: 1rem;
    margin-right: 0.5rem;
    `;
const YouTubeIcon = styled.img.attrs({
    src: "/assets/youtube-fill.png",
    alt: "YouTube icon",
    })`
    height: 1rem;
    margin-right: 0.5rem;
    `;
const SoundCloudIcon = styled.img.attrs({
    src: "/assets/soundcloud-fill.png",
    alt: "Soundcloud icon",
    })`
    height: 1rem;
    margin-right: 0.5rem;
    `;
const SocialUrlDescription = styled.p`
    font-family: Poppins;
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.3px;
    color: #454843;
    margin-bottom: 0rem;
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
    ArtistTitle,
    ArtistDescription,
    BarContainer,
    BarItem,
    ProfilePhotoContainer,
    AvatarrIcon,
    AvatarDescText,
    ButtonsWrapper,
    ArtistButtonContainer,
    ArtistButton,
    CloseIcon,
    NextIcon,
    LocationContainer,
    LocationInput,
    LocationIcon,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    YouTubeIcon,
    SoundCloudIcon,
    SocialUrlDescription,
}
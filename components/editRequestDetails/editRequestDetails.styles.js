import styled from 'styled-components';
import { space } from "styled-system";

const RequestWrapper = styled.div`
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

const RequestFormContainer = styled.div`
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
    padding: 2rem; 

    @media (max-width: 20em) {
        padding-left: 10px;
        padding-right: 27px;
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

const ArtistTitle = styled.h3`
    padding-top: 1.6rem;
    margin-bottom: 0rem;
    font-family: Poppins;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.6px;
    color: #012;
    @media screen and (max-width: 26.5625em){
    font-size: 18px;
    }
`;

const ArtistDescription = styled.p`
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.3px;
    color: #454843;
    @media screen and (max-width: 26.5625em){
         text-align: center;
    }
`;

const BarContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 0 2rem;
      @media screen and (max-width: 48em){
           width: 100%;
    }
    @media screen and (max-width: 26.5625em){
       
    }
     @media screen and (max-width: 23.4375em){
       
    }
     @media screen and (max-width: 20em){
        
    }
`;

const BarItem = styled.div`
    width: 25%;
    height: 8px;
    border-radius: 100000px;
    background-color:  ${(props) => (props.barbg ? "#3E46B6" : "#DADDFB")};
    margin-right: 0.8rem;
      @media screen and (max-width: 48em){
           width: 50%;
    }
    @media screen and (max-width: 26.5625em){
       
    }
     @media screen and (max-width: 23.4375em){
       
    }
     @media screen and (max-width: 20em){
        
    }
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

const RequestButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
    height: 2.5rem;
    padding: 0.6rem;
    border-radius: 100px;
    border: ${(props) => (props.artistborder ? "1px solid #3E46B6" : "none")};
    background-color:  ${(props) => (props.artistbutton ? "#3E46B6" : "#ffffff")};
    cursor: pointer;
    text-align: center;
    width:  ${(props) => (props.addartistbutton ? "100%" : "24%")};:

    @media screen and (max-width: 64em) {
        width: 24%;
    }
    @media screen and (max-width: 26.5625em){
        width:  ${(props) => (props.addartistbutton ? "100%" : "46%")};:
    }
`;

const RequestButton = styled.p`
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 22.652px;
    letter-spacing: 0.7px;
    color:  ${(props) => (props.artistcolor ? "#AAACA6" : "#ffffff")};
    cursor: pointer;
    padding-left: ${(props) => (props.leftpadding ? "0.5rem" : "")};
    padding-right: ${(props) => (props.rightpadding ? "0.5rem" : "")};
`;

const CloseIcon = styled.img.attrs({
    src: "/assets/arrow-left.png",
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

const TagContainer = styled.div`
   display: flex;
   align-items: center;
   padding-bottom: 0.8rem;
`;

export {
    RequestWrapper,
    BackContainer,
    BackIcon,
    BackText,
    RequestFormContainer,
    InnerArtistContainer,
    FormContainer,
    FormLabel,
    ArtistTitle,
    ArtistDescription,
    BarContainer,
    BarItem,
    ButtonsWrapper,
    RequestButtonContainer,
    RequestButton,
    CloseIcon,
    NextIcon,
    TagContainer,
}

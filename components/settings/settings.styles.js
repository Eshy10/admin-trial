import styled from 'styled-components';
import { display, space, width } from "styled-system";

const SettingsWrapper = styled.main`
padding: 20px;
display: flex;
flex-direction: column;
gap: 24px;

@media screen and (max-width: 600px){
    padding: 15px;
}
`;

const TopBar = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;

@media screen and (max-width: 600px){
    flex-direction: column;
}
`;

const BackButton = styled.button`
/* Reset default styles */
appearance: none;
background-color: transparent;
border: none;
margin: 0;
padding: 0;
outline: none;
font-family: inherit;
cursor: pointer;
color: #000;

display: inline-flex;
padding: 15px 0px;
justify-content: center;
align-items: center;
gap: 10px;

position: absolute;
left: 0px;

@media screen and (max-width: 600px){
    position: relative;
    align-self: flex-start;
}
`

const BackIcon = styled.img.attrs({
    src: "/assets/arrow-left-black.svg",
    alt: "Back icon",
})`
    height: 20px;
    width: 20px;
`;

const Panes = styled.div`
display: flex;
gap: 10px;
`

const Pane = styled.span`
padding: 10px 15px;
align-items: center;
gap: 10px;

border-radius: 1000px;
background: ${(props) => props.$active === 'true' ? '#DADDFB' : '#F2F2F2'};

color: ${(props) => props.$active === 'true' ? '#3E46B6' : '#AAACA6'};

text-align: center;
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 22.652px; /* 188.767% */
letter-spacing: 0.6px;

cursor: pointer;
`

const MainBar = styled.main`
width: 720px;
padding: 50px;
align-self: center;

display: flex;

flex-direction: column;
align-items: center;
gap: 50px;

border-radius: 20px;
border: 1px solid var(--Neutral2, #AAACA6);
background: var(--Neutral-Variant1, #FFF);

@media screen and (max-width: 990px){
    width: 100%;
    gap: 24px;
}

@media screen and (max-width: 600px){
    padding: 24px 15px; 
}
`;

const Heading = styled.h1`
margin: 0px;
color: var(--Neutral5, #012);
text-align: center;
font-family: Poppins;
font-size: 30px;
font-style: normal;
font-weight: 500;
line-height: 48.54px;
letter-spacing: 0.6px;

@media screen and (max-width: 600px){
    font-size: 20px;
    line-height: 30px; /* 150% */
    letter-spacing: 0.4px;
}
`

const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
gap: 30px;

@media screen and (max-width: 600px){
    padding: 10px;
}
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.$gap ? props.$gap : '5px')};
`;

const PictureContainer = styled.div`
    position: relative;
    align-self: center;
`

const DisplayPicture = styled.img.attrs(({ src }) => ({
    src: src,
    alt: `Profile Image`
}))`
    float: left;
    width:  150px;
    border-radius: 150px;
    height: 150px;
    object-fit: cover;

    @media screen and (max-width: 600px){
        height: 100px;
        width: 100px;
        border-radius: 100px;
    }
    `;

const PictureLabel = styled.span`
color: var(--Primary5, #3E46B6);
align-self: center;

font-family: Poppins;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 24.27px; /* 161.8% */
letter-spacing: 0.3px;

cursor: pointer;
`

const UploadImage = styled.input`
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

const FormLabel = styled.span`
color: var(--Neutral4, #454843);

font-family: Poppins;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 24.27px; 
letter-spacing: 0.3px;
`

const FormItem = styled.input`
width: 100%;
padding: 15px;
border-radius: 10px;
border: 1px solid var(--Neutral2, #AAACA6);
background: var(--Neutral-Variant1, #FFF);

color: var(--Neutral5, #012);

font-family: Poppins;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 24.27px; 
letter-spacing: 0.3px;
`

const ActionBar = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
`;

const SubmitButton = styled.button`
  appearance: none;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 15px 30px; /* Adjusted padding */
  outline: none;
  cursor: pointer;

  color: var(--Neutral-Variant1, #FFF);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22.652px;
  letter-spacing: 0.7px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: var(--Primary5, #3E46B6);

  /* Add focus styles for accessibility */
  &:focus {
    outline: 2px solid var(--Primary5, #3E46B6);
    /* Add any additional focus styles as needed */
  }
`;

const DeactivateButton = styled.button`
    appearance: none;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 15px 30px; /* Adjusted padding */
    outline: none;
    cursor: pointer;

    color: var(--Error3, #DE786D);
    text-align: center;
    /* Button */
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22.652px; /* 161.8% */
    letter-spacing: 0.7px;

  /* Add focus styles for accessibility */
  &:focus {
    outline: 2px solid var(--Primary5, #3E46B6);
    /* Add any additional focus styles as needed */
  }
`;

const ForgotPasswordButton = styled.button`
    appearance: none;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 15px 30px; /* Adjusted padding */
    outline: none;
    cursor: pointer;

    color: var(--Neutral4, #454843);
    text-align: center;

    /* Button */
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22.652px; /* 161.8% */
    letter-spacing: 0.7px;
    margin-bottom: 48px;

  /* Add focus styles for accessibility */
  &:focus {
    outline: 2px solid var(--Primary5, #3E46B6);
    /* Add any additional focus styles as needed */
  }
`;

export {
    SettingsWrapper,
    TopBar,
    BackButton,
    BackIcon,
    Panes,
    Pane,
    MainBar,
    Heading,
    Form,
    FormGroup,
    PictureContainer,
    DisplayPicture,
    UploadImage,
    FormItem,
    FormLabel,
    PictureLabel,
    ActionBar,
    SubmitButton,
    DeactivateButton,
    ForgotPasswordButton
}
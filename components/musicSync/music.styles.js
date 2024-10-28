import styled from 'styled-components';
import { display, space, width } from "styled-system";

const DashboardWrapper = styled.div``;

const TopContainer = styled.div`
`;

const MetricsWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: stretch;
width: 95.8%;
margin-top: 1.25rem;

@media screen and (min-width: 768px) {
  flex-direction: row;
  flex-wrap: wrap;
}
@media screen and (max-width: 768px) {
    width: 98.8vw;
    margin-left: -0.2rem;
}
@media screen and (max-width: 425px) {
    margin-left: 0.2rem;
}
`;

const MetricsDetailBoxes = styled.div`
background-color: ${(props) => (props?.$bgcolor ? props.$bgcolor : "#CBEEFD")};
padding: 0.9rem;
border-radius: 10px;
margin: 0.5rem;
flex: 1;

@media screen and (min-width: 768px) {
  margin: 0.5rem;
  flex-basis: calc(33.33% - 1rem); 
}

@media screen and (max-width: 768px) {
  flex-basis: calc(100% - 1rem); 
}
`;


const TopItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const BottomItems = styled.div`
     display: flex;
   
`;

const TopText = styled.p`
font-size: 0.875rem;
font-family: Poppins;
font-style: normal;
font-weight: 500;
line-height: 24.27px;
letter-spacing: 0.3px;
 @media screen and (max-width: 64em){
     font-size: 0.75rem;
 }
  @media screen and (max-width: 48em){
     font-size: 0.625rem;
 }
`;

const BottomText = styled.p`
font-size: 1rem;
font-family: Poppins;
font-style: normal;
font-weight: 700;
letter-spacing: 0.6px;
 @media screen and (max-width: 64em){
     font-size: 0.875rem;
 }
  @media screen and (max-width: 48em){
      font-size: 0.75rem;
 }
`;

const DateWrapper = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: stretch;
   width: 95%;
   margin-top: 1.25rem;

@media screen and (max-width: 768px) {
    width: 98.8vw;
}
`;
const DateContainer = styled.div`
width:  15%;
height: 2.5rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
margin-bottom: 1.5em;
background-color: #3E46B6;
padding: 0.063rem 0.375rem;
@media (max-width: 64em) {
    margin-bottom: 1rem;
    width: 25%;
  }
@media (max-width: 48em) {
    margin-bottom: 1rem;
    width: 25%;
  }
  @media screen and (max-width: 26.5625em){
    margin-bottom: 1rem;
    width: 42%;
}
@media screen and (max-width: 430px){
    margin-bottom: 1rem;
    width: 48%;
}
@media screen and (max-width: 20em){
    margin-bottom: 1rem;
    width: 55%;
}
`;

const DateText = styled.p`
     font-size: 12px;
     color: #ffffff;
     white-space: nowrap;
`;

const CalendarIcon = styled.img.attrs({
    src: "/assets/calendar-line.png",
    alt: "Calendar logo",
  })`
    height: 1rem;
  `;
const AddIcon = styled.img.attrs({
src: "/assets/add-line.png",
alt: "Plus logo",
})`
height: 1rem;
padding-right: 0.5rem;
`;

const BlueIcon = styled.img.attrs({
// src: "/assets/group-icon-user.png",
alt: "User1 logo",
})`
height: 1rem;
`;
const PurpleIcon = styled.img.attrs({
src: "/assets/checkbox-blue.png",
alt: "User2 logo",
})`
height: 1rem;
`;
const GreenIcon = styled.img.attrs({
src: "/assets/line-chart-filll.png",
alt: "User3 logo",
})`
height: 1rem;
`;
const InfoIcon = styled.img.attrs({
src: "/assets/information-line.png",
alt: "User4 logo",
})`
height: 1rem;
margin-top: 1rem;
margin-left: 0.5rem;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2rem auto;
    text-align: center;
`;

const RequestButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    padding: 1rem; 0.9rem;
    border-radius: 100px;
    border: ${(props) => (props.$requestborder ? "1px solid #3E46B6" : "none")};
    background-color:  ${(props) => (props.$requestbutton ? "#3E46B6" : "#ffffff")};
    cursor: pointer;
    text-align: center;

    @media screen and (max-width: 64em) {
        width: 20%;
    }
`;

const RequestButton = styled.p`
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 22.652px;
    letter-spacing: 0.7px;
    color:  ${(props) => (props.$requestcolor ? "#3E46B6" : "#ffffff")};
    cursor: pointer;
`;
const RequestTextContainer = styled.div`
    padding: 1.5rem;
`;

const RequestText = styled.p`
    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 40.45px; 
    letter-spacing: 0.5px;
    color: #012;
    @media screen and (max-width: 23.4375em){
        margin-left: -0.5rem;
    }    
`;

const RequestButtonsWrapper = styled.div`
    display: flex;
    width: 96%;
`;

const TabsWrapper= styled.div`
    
`;

const SearchWrapper = styled.div`
    margin-top: 1.5rem;
   margin-bottom: 1rem;
   margin-left: -1rem;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 50%;
     @media screen and (max-width: 48em){
      display: block;
    }
`;

export {
    DashboardWrapper,
    TopContainer,
    MetricsWrapper,
    MetricsDetailBoxes,
    TopItems,
    BottomItems,
    TopText,
    BottomText,
    DateWrapper,
    DateContainer,
    DateText,
    CalendarIcon,
    AddIcon,
    BlueIcon,
    PurpleIcon,
    GreenIcon,
    InfoIcon,
    ButtonsWrapper,
    RequestButtonContainer,
    RequestButton,
    RequestTextContainer,
    RequestText,
    RequestButtonsWrapper,
    TabsWrapper,
    SearchWrapper
}
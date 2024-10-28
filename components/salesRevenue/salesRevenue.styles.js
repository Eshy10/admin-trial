import styled from 'styled-components';
import { display, space, width } from "styled-system";

const DashboardWrapper = styled.div``;

const TopContainer = styled.div`
`;
const CardWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: stretch;
width: 92.8%;
margin-top: 1.25rem;

@media screen and (min-width: 768px) {
  flex-direction: row;
  flex-wrap: wrap;
}
@media screen and (max-width: 768px) {
    width: 98.8vw;
}
`;

const CardBoxes = styled.div`
padding: 0.9rem;
border-radius: 20px;
border: 1px solid #E2E3DD;
margin: 0.5rem;
background-color: #FFF;
flex: 1;

@media screen and (min-width: 768px) {
  margin: 0.5rem;
  flex-basis: calc(50% - 1rem); 
}

@media screen and (max-width: 768px) {
  flex-basis: calc(100% - 1rem); 
}
`;
const CardTitle = styled.p`
    font-family: Poppins;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 32.36px;
    letter-spacing: 0.4px;
    color: #3E46B6;
`;

const CardDetailContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom:  ${(props) => (props.noborder? "none" : "1px solid #E8E8E8")};
`;

const CardDetail = styled.span`
    display: flex;
    align-items: center;
    flex: 1;
`;

const ProfilePicture = styled.div`
    background-image: url("/assets/musician.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 29px;
    height: 28px;
    border-radius: 150px;
    background-color: #F9F9F9;
    margin-right: 0.6rem;
`;

const TextWrapper = styled.div`

`;

const FullName = styled.p`
    font-size: 13px;
    ffont-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 24.27px; 
    letter-spacing: 0.3px;
    color: #454843;
`;

const CollaborationInfo = styled.p`
    font-size: 13px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.3px;
    color: #454843;
    margin-top: -0.7rem;
`;

const TextSpan = styled.span`
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 24.27px;
    letter-spacing: 0.3px;
    color: #454843;
    padding-right: 0.4rem;
`;

const SpendingAmountContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 10000px;
    background-color: #D6FFFB;
    height: 1.5rem;
    padding: 2px 10px;
    margin-top: 0.6rem;
`;

const SpendingAmount = styled.p`
    font-size: 13px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.6px;
`;

const MetricsWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: stretch;
width: 91.8%;
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

const DateContainer = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: stretch;
   width: 90.8%;
   margin-top: 1.25rem;

@media screen and (max-width: 768px) {
    width: 98.8vw;
}
`;

const DateText = styled.p`
    margin-left: 0.5rem;
    font-size: 13px;
    color: #3E46B6;
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
`;

const BlueIcon = styled.img.attrs({
// src: "/assets/dollar-circle-line.png",
alt: "User1 logo",
})`
height: 1rem;
`;
const PurpleIcon = styled.img.attrs({
src: "/assets/user-location-line.png",
alt: "User2 logo",
})`
height: 1rem;
`;
const GreenIcon = styled.img.attrs({
src: "/assets/user-star-line.png",
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

const TransactionsWrapper = styled.div`
   width: 90.8%;
  border-radius: 10px;
  border: 1px solid #E2E3DD;
  background-color: #ffffff;
  padding: 1rem 2rem;
  margin: 3rem 0.8rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: stretch;

@media screen and (min-width: 768px) {
  flex-direction: column;
}
@media screen and (max-width: 768px) {
    width: 97vw;
    margin-left: -0.1rem;
}
@media screen and (max-width: 425px) {
    margin-left: 0.2rem;
}
`;
const MobileContainer = styled.div`
@media screen and (min-width: 768px) {
  display: none;
}
@media screen and (max-width: 768px) {
    display: flex;
}
`;
const TransactionsHeader = styled.div`

`;

const TransactionsTitle = styled.h3`
    font-size: 16px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: 32.36px;
    letter-spacing: 0.4px;
    color: #3E46B6;
`;

const BarChartContainer = styled.div`
    ${display};
    flex-direction: column;
    width: 90.8%;
    max-height: 100vh;
    border-radius: 10px;
    border: 1px solid #E2E3DD;
    background-color: #ffffff;
    padding: 1rem 2rem;
    margin: 2rem 0.8rem;
     @media (max-width: 64em) {
        width: 96%;
     }
     @media (max-width: 48em) {
        width: 66%;
     }
     @media screen and (max-width: 26.5625em){
        padding: 0.5rem;
        margin: 0.6rem;
        width: 37%;
        margin-bottom: 2rem;
    }
    @media screen and (max-width: 23.4375em){
        margin: 0rem;
        width: 34%;
    }
`;

const ChartTitle = styled.h3`
    font-size: 16px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: 32.36px;
    letter-spacing: 0.4px;
    color: #3E46B6;
`;

const SearchContainer = styled.div`
   margin-top: 1.5rem;
   margin-bottom: 1rem;
   width: 100%;
`;

const TabsContainer = styled.div`
 
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
    DateContainer,
    DateText,
    CalendarIcon,
    AddIcon,
    BlueIcon,
    PurpleIcon,
    GreenIcon,
    InfoIcon,
    TransactionsWrapper,
    TransactionsHeader,
    TransactionsTitle,
    BarChartContainer,
    ChartTitle,
    CardWrapper,
    CardBoxes,
    CardTitle,
    CardDetailContainer,
    CardDetail,
    TextWrapper,
    ProfilePicture,
    FullName,
    CollaborationInfo,
    TextSpan,
    SpendingAmountContainer,
    SpendingAmount,
    SearchContainer,
    TabsContainer,
    MobileContainer
}
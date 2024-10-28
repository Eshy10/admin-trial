import styled from 'styled-components';
import { display, space, width } from "styled-system";

const DashboardWrapper = styled.div`
    
`;

const TopContainer = styled.div``;

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
background-color: ${(props) => (props?.bgcolor ? props.bgcolor : "#CBEEFD")};
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
    width: 98vw;
}
`;

const DateText = styled.p`
    margin-left: 0.5rem;
    font-size: 13px;
    color: #3E46B6;
`;

const AddIcon = styled.img.attrs({
src: "/assets/add-line.png",
alt: "Plus logo",
})`
height: 1rem;
`;

const BlueIcon = styled.img.attrs({
// src: "/assets/group-line.png",
alt: "User1 logo",
})`
height: 1rem;
`;
const PurpleIcon = styled.img.attrs({
src: "/assets/money-dollar-circle-line.png",
alt: "User2 logo",
})`
height: 1rem;
`;
const GreenIcon = styled.img.attrs({
src: "/assets/team-line.png",
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
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const MobileContainer = styled.div`
    display: none;
    @media screen and (max-width: 1200px) {
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
    @media (max-width: 48em) {
        padding-left: 1.5rem;
    }
`;
const BarChartContainer = styled.div`
    flex-direction: column;
    width: 90.8%;
    border-radius: 10px;
    border: 1px solid #E2E3DD;
    background-color: #ffffff;
    padding: 1rem 2rem;
    margin: 3rem 0.8rem;
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

const LineChartContainer = styled.div`
    ${display};
    flex-direction: column;
    width: 90.8%;
    max-height: 100vh;
    border-radius: 10px;
    border: 1px solid #E2E3DD;
    background-color: #ffffff;
    padding: 1rem 2rem;
    margin: 3rem 0.8rem;
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

     @media screen and (max-width: 26.5625em){
      font-size: 12px;
    }
`;

const SearchContainer = styled.div`
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
    AddIcon,
    BlueIcon,
    PurpleIcon,
    GreenIcon,
    InfoIcon,
    TransactionsWrapper,
    TransactionsHeader,
    TransactionsTitle,
    BarChartContainer,
    LineChartContainer,
    ChartTitle,
    SearchContainer,
    TabsContainer,
    MobileContainer
}
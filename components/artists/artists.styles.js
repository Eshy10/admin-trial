import styled from 'styled-components';
import { display } from "styled-system";

const DashboardWrapper = styled.div``;

const TopContainer = styled.div``;

const MetricsWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: stretch;
width: 95.8%;
margin-top: 1.25rem;

@media screen and (min-width: 768px) {
  flex-direction: row;
}
@media screen and (max-width: 768px) {
    width: 98.8vw;
    flex-direction: column;
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

const TableContainer = styled.table`
width: 100%;
border-collapse: collapse;
background-color: #ffffff;

@media screen and (min-width: 1200px) {
    width: 100%;
    align-items: stretch;
}
  
@media screen and (max-width: 1200px) {
    display: none;
}
`;

const TBodyContainer = styled.tbody``

const TableHeader = styled.th`
text-align: left;
padding: 8px;
font-weight: 500;
border-bottom: 1px solid #E2E3DD;
`;

const TableRow = styled.tr`
  width: 100%;
  border-bottom: 1px solid #E2E3DD;
`;


const TableCell = styled.td`
  font-size: 12px;
  font-family: Poppins;
  font-style: normal;
  font-weight: ${(props) => (props.$headerweight  ? "500" : "400")}; 
  line-height: 19.416px;
  letter-spacing: 0.24px;
  color:  ${(props) => (props.$headercolor ? "012" : "#454843")};
  text-align: left;
  padding: 8px;
`;

const IconCell = styled.div`
  display: flex;
  align-items: center;
`;
const DateCell = styled(TableCell)`
  margin-left: 2rem;
`;

const FileIcon = styled.img.attrs({
    src: "/assets/file-list-2-line.png",
    alt: "File icon",
    })`
    height: 0.9rem;
    margin-top: 0.3rem;
    `;
const DeleteIcon = styled.img.attrs({
    src: "/assets/delete-bin-line.png",
    alt: "Delete icon",
    })`
    height: 1rem;
    margin-left: 1rem;
    `;
const UserIcon = styled.img.attrs({
    src: "/assets/artist.png",
    alt: "User Artist icon",
    })`
    height: 1rem;
    `;
    
const PencilEditIcon = styled.img.attrs({
    src: "/assets/pencil-line.png",
    alt: "Edit icon",
    })`
    height: 1rem;
    margin-top: 0.3rem;
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
padding: 1px 6px;
@media (max-width: 64em) {
    margin-bottom: 1rem;
    width: 22%;
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

const AddIcon = styled.img.attrs({
src: "/assets/add-line.png",
alt: "Plus logo",
})`
height: 1rem;
margin-right: 0.5rem;
`;

const BlueIcon = styled.img.attrs({
// src: "/assets/user-star-line.png",
alt: "User1 logo",
})`
height: 1rem;
`;
const PurpleIcon = styled.img.attrs({
src: "/assets/team-line light.png",
alt: "User2 logo",
})`
height: 1rem;
`;
const GreenIcon = styled.img.attrs({
src: "/assets/user-follow.png",
alt: "User3 logo",
})`
height: 1rem;
`;

const PeachIcon = styled.img.attrs({
src: "/assets/user-2-peach.png",
alt: "User3 logo",
})`
height: 1rem;
`;

const YellowIcon = styled.img.attrs({
src: "/assets/user-line-yellow.png",
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
    flex-direction: column;
    width: 95%;
    border-radius: 10px;
    border: 1px solid #E2E3DD;
    background-color: #ffffff;
    padding: 1rem 2rem;
    margin: 0.4rem 0.8rem;
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
@media screen and (min-width: 1200px) {
  display: none;
}
@media screen and (max-width: 1200px) {
    display: flex;
}
`;

const TransactionsTitle = styled.div`
    font-size: 14px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: 32.36px;
    letter-spacing: 0.4px;
    color: #3E46B6;
    padding-top: 0.5rem;
    border-bottom: 1px solid #E2E3DD;
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 97.8%;
    padding: 0rem 0.8rem;
    margin: 0rem 0.1rem;
    margin-top: 4.5rem;
     @media screen and (max-width: 48em){
      display: block;
    }
`;

const SearchContainer = styled.div`
   margin-top: 1.5rem;
   margin-bottom: 1rem;
   margin-left: -1.5rem;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 50%;
     @media screen and (max-width: 48em){
      display: block;
      margin-left: 0rem;
    }
`;

const TransactionsButtons = styled.div`
    display: flex; 
    align-items: center; 
     @media (max-width: 64em) {
        padding-left: 1rem;
     }
     @media screen and (max-width: 48em){
         display: block;
         width: 50%;
         margin-left: -0.8rem;
    }
`;
const Container = styled.div`
    margin-left: -0.8rem;
    width: 50%;
    @media (max-width: 48em) {
        margin-top: -0.8rem;
        margin-left: -1rem;
        width: 100%;
        margin-bottom: 1rem;
    }
`;
const ButtonWrapper = styled.div`
     margin-top: 0.6rem;
      width: 50%;
      text-align: center;
      @media screen and (max-width: 48em){
        width: 85%;
      }
`;
const ReceivedButton = styled.p`
    margin-right: 1rem;
    font-size: 12px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px;
    letter-spacing: 0.3px;
    border-radius: 10000px;
    border: 1px solid #3E46B6; 
    background-color: #ffffff;
    color: #3E46B6;
    padding: 0.2rem 0.9rem;
    cursor: pointer;
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
    margin: 3rem 0.8rem;
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


const UserIconWrapper = styled.span`
    width: 25px;
    height: 25px;
    background-color: #DADDFB;
    border-radius: 50%;
    padding: 0.2rem 0.3rem;
    margin-right: 0.6rem;
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
    PeachIcon,
    YellowIcon,
    AddIcon,
    BlueIcon,
    PurpleIcon,
    GreenIcon,
    InfoIcon,
    TransactionsWrapper,
    TransactionsTitle,
    ButtonsContainer,
    TransactionsButtons,
    Container ,
    ReceivedButton,
    ButtonWrapper,
    FileIcon,
    DeleteIcon,
    BarChartContainer,
    LineChartContainer,
    ChartTitle,
    UserIconWrapper,
    UserIcon,
    PencilEditIcon,
    TableContainer,
    TBodyContainer,
    TableHeader,
    TableRow,
    TableCell,
    DateCell,
    MobileContainer,
    IconCell,
    SearchContainer
}
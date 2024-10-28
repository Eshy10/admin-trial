import styled from 'styled-components';
import { display } from "styled-system";

const TableContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-collapse: collapse;
  background-color: #ffffff;
  align-items: stretch;
  width: 100%;
`;

const TableHeader = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding-top: 1rem;
font-weight: bold;
border-top: 1px solid #E2E3DD;
border-bottom: 1px solid #E2E3DD;
 @media screen and (max-width: 26.5625em){
    padding-left:  ${(props) => (props.tablepadding ? "5rem" : "")};
 }
`;

const TableRow = styled.div`
 display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 0.3rem;
  width: 59vw;
  padding-bottom: 0.5rem;
  border-top:  ${({ $borderbottom }) => ($borderbottom ? "1px solid #E2E3DD" : "")}; 
  margin-bottom: ${({ $marbottom }) => ($marbottom ? "2rem" : "")};
`;

const TableCell = styled.div`
display: flex;
align-items: center;
font-size: 12px;
font-family: Poppins;
font-style: normal;
font-weight: 400; 
line-height: 19.416px;
letter-spacing: 0.24px;
color:  ${(props) => (props.$headercolor? "012" : "#767873")};
border-radius:  ${(props) => (props.$successradius ? "10000px" : "")};
background-color:  ${(props) => (props.$successbg ? "#DFFAD5" : "")};
font-size:  ${(props) => (props.$successsize ? "10px" : "")};
padding:  ${(props) => (props.$successpadding ? "3px 8px" : "")};
width:  ${(props) => (props.$successwidth ? "34%" : "")};
@media screen and (max-width: 48em) {
  width: 100%;
  text-align: left;
}
`;
const RowWrrapper = styled.div``;

const IconCell = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DescriptionCell = styled.div`
    width: 80%;
    font-size: 12px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px;
    letter-spacing: 0.24px;
    color: #454843;
`;

const PaymentMethodText = styled.span`
    font-size: 12px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px;
    letter-spacing: 0.24px;
    padding-left: 0.8rem;
    padding-right: 1rem;
    padding-top: 0.2rem;
    white-space: nowrap;
`;


const FileIcon = styled.img.attrs({
    src: "/assets/file-list-2-line.png",
    alt: "File icon",
    })`
    height: 1rem;
    `;
const DeleteIcon = styled.img.attrs({
    src: "/assets/delete-bin-line.png",
    alt: "Delete icon",
    })`
    height: 1rem;
    margin-left: 1rem;
    `;

const TransactionsWrapper = styled.div`
    display: ${({ mobile }) => (mobile ? "flex" : "")};
   flex-direction: column;
   justify-content: center;

@media screen and (min-width: 1200px) {
  flex-direction: column;
  display: none;
}
@media screen and (max-width: 1200px) {
    display: flex;
    padding-left: 1rem;
}
`;
const TransactionsHeader = styled.div`
 
`;
const SearchContainer = styled.div`
      margin-top: 1.5rem;
      margin-bottom: 2rem;
      width: 100%;
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

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.5rem;
`;

const TransactionsButtons = styled.div`
    display: flex; 
    align-items: center; 
`;
const ButtonWrapper = styled.div`
   
`;

const TabsWrapper= styled.div`
   
`;
const TransactionsTabsContainer = styled.div`
    display: flex;
    align-items: center;
    padding-top: 2rem;
    padding-left: 0.8rem;
`;

const TransactionsTab = styled.span`
    padding: 6px 15px;
    border-radius: 10000px;
    background-color: ${(props) => (props.$transactionsbg ? "#3E46B6" : "#F2F2F2")};
    color: ${(props) => (props.$transactionscolor ? "#FFFFFF" : "#767873")};
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px; 
    letter-spacing: 0.3px;
    margin-right: 0.8rem;
`;

const CardContainer = styled.div`
    padding-top: 1.5rem;
`;
const MetricsBoxContainer = styled.div`
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
}
`;

const MetricsBox = styled.div`
padding: 0.9rem;
border-radius: 20px;
border: 1px solid #E2E3DD;
margin: 0.5rem;
background-color: #FFF;
flex: 1;

@media screen and (min-width: 768px) {
  margin: 0.5rem;
  flex-basis: calc(33.33% - 1rem); 
}

@media screen and (max-width: 768px) {
  flex-basis: calc(100% - 1rem); 
}
`;
const MetricsItems = styled.div`

`;

const TopText = styled.p`
    font-family: Poppins;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.28px;
    color:  ${(props) => (props?.$billing ? props.$billing : "#012")};
    color:  ${(props) => (props?.$cancelsub ? props.$cancelcub : "")};
`;

const BottomText = styled.p`
    font-family: Poppins;
    font-size:  ${(props) => (props.$newsize ? "1rem" : "1.125rem")};
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.6px;
    margin-top: -0.3rem;
    margin-bottom: ${(props) => (props.$bottompad ? "0.5rem" : "")};
    font-size: ${(props) => (props.$date ? "1.125rem" : "")};
`;

const SmallText = styled.p`
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px; 
    letter-spacing: 0.24px;
    color: #767873;
    margin-top: -1rem;
`;

const UserIconWrapper = styled.span`
    width: 15px;
    height: 15px;
`;

const UserIcon = styled.img.attrs({
    src: "/assets/Mastercard.png",
    alt: "User Artist icon",
    })`
    height: 1rem;
    `;

export {
    TransactionsWrapper,
    TransactionsHeader,
    TransactionsTitle,
    ButtonsContainer,
    TransactionsButtons,
    ButtonWrapper,
    TableContainer,
    TableHeader,
    TableRow,
    TableCell,
    DescriptionCell,
    FileIcon,
    DeleteIcon,
    TabsWrapper,
    TransactionsTabsContainer,
    TransactionsTab,
    CardContainer,
    MetricsBoxContainer,
    MetricsBox,
    MetricsItems,
    TopText,
    BottomText,
    SmallText,
    UserIconWrapper,
    UserIcon,
    PaymentMethodText,
    SearchContainer,
    IconCell,
    RowWrrapper 
}

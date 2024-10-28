import styled from 'styled-components';
import { display } from "styled-system";

const TableContainer = styled.div`
  width: 100%;
  border-collapse: collapse;
  padding-bottom: 0.8rem;
  padding-top: 1rem;
   @media screen and (max-width: 26.5625em){
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
   }
   @media screen and (max-width: 23.4375em){
       
  }
 @media screen and (max-width: 20em){
     
 }
`;
const TBodyContainer = styled.tbody``

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr 5fr 5fr 5fr;
  padding: 1rem; 
  font-weight: bold;
  border-top: 1px solid #E2E3DD;
  border-bottom: 1px solid #E2E3DD;
   @media screen and (max-width: 64em){
       grid-template-columns: 1fr 6fr 5fr 5fr 5fr;
   }
   @media screen and (max-width: 26.5625em){
    grid-template-columns: repeat(5, 1fr);
   }
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr 5fr 5fr 5fr;
  padding: 1rem;
  border-bottom: 1px solid #E2E3DD;
  align-items: start;
   @media screen and (max-width: 64em){
    grid-template-columns: 1fr 10fr 5fr 5fr 5fr;
   }
   @media screen and (max-width: 26.5625em){
    grid-template-columns: repeat(5, 1fr);
      align-items: center;
   }
`;

const TableCell = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => (props.ratingsize ? "16px" : "12px")}; 
  font-family: Poppins;
  font-style: normal;
  font-weight: ${(props) => (props.$headerweight ? "500" : "400")}; 
  line-height: 19.416px;
  letter-spacing: 0.24px;
  color:  ${(props) => (props.$headercolor ? "012" : "#454843")};
  border-radius:  ${(props) => (props.$successradius ? "10000px" : "")};
  background-color:  ${(props) => (props.$collabbg ? "#DADDFB" : "")};
  background-color:  ${(props) => (props.$creatorbg ? "#D6FFFB" : "")};
  font-size:  ${(props) => (props.$successsize ? "10px" : "")};
  padding:  ${(props) => (props.$successpadding ? "3px 8px" : "")};
  width:  ${(props) => (props.$collabwidth ? "48%" : "")};
  width:  ${(props) => (props.$creatorwidth ? "30%" : "")};
  color:  ${(props) => (props.$creatorcolor ? "#36D7FF" : "")};
  padding-right: ${(props) => (props.$ratingpadding ? "0.4rem" : "")}; 
  @media screen and (max-width: 26.5625em){
    padding-right: 1rem;
  }
`;

const DescripyionCell = styled.div`
    width: 80%;
    font-size: 12px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px;
    letter-spacing: 0.24px;
    color: #454843;
    margin-right: 3rem;
`;
const FileIcon = styled.img.attrs({
    src: "/assets/file-list-2-line.png",
    alt: "File icon",
    })`
    height: 1rem;
    margin-top: 0.5rem;
    cursor: pointer;
    `;
const DeleteIcon = styled.img.attrs({
    src: "/assets/delete-bin-line.png",
    alt: "Delete icon",
    })`
    height: 1rem;
    margin-left: 1rem;
    `;

const TransactionsWrapper = styled.div`
    display: ${({ $mobile }) => ($mobile ? "none" : "flex")};
   flex-direction: column;
   justify-content: center;
   align-items: stretch;

@media screen and (min-width: 1200px) {
  display: flex;
  flex-direction: column;
  width: 100%;
}
@media screen and (max-width: 1200px) {
    display: none;
}
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

const TabsWrapper= styled.div`
    display: flex;
    align-items: center;
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

const UserIconWrapper = styled.span`
    display: flex;
    align-items: flex-start;
    align-self: flex-start;
    padding: 0.2rem 0.3rem;
    margin-right: 0.6rem;
`;

const UserTextnWrapper = styled.span`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0.2rem 0.3rem;
    margin-right: 0.6rem;
`;

const UserIcon = styled.img.attrs({
    src: "/assets/review-pic.png",
    alt: "User Artist icon",
    })`
    height: 2rem;
    `;

const FullStarIcon = styled.img.attrs({
    src: "/assets/star-full-fill.png",
    alt: "User Artist icon",
    })`
    height: 1.2rem;
    padding-top: 0.3rem;
    `;
const HalfStarIcon = styled.img.attrs({
    src: "/assets/star-half-fill.png",
    alt: "User Artist icon",
    })`
    height: 1.2rem;
    padding-top: 0.3rem;
    `;
const ActionButtonsWrapper = styled.div`
     z-index: 3000;
`;

const Button = styled.span`
    margin-right: 1rem;
    font-size: 12px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px;
    letter-spacing: 0.3px;
    border-radius: 10000px;
    border: ${(props) => (props.$approveborder ? "1px solid #58CA59" : "1px solid #DE786D")}; 
    background-color: #ffffff;
    color:  ${(props) => (props.$approvecolor ? "#58CA59" : "#DE786D")}; ;
    padding: 0.2rem 0.9rem;
    cursor: pointer;
    z-index: 3000;
`;

const ReviewText = styled.span`
    font-size: 12px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px;
    letter-spacing: 0.24px;
    width:  ${(props) => (props.$textwidth ? "100%" : "")}; 
`;

const RattingTextContainer = styled.div``;

export {
    TransactionsWrapper,
    ButtonsContainer,
    TransactionsButtons,
    TableContainer,
    TBodyContainer,
    TableHeader,
    TableRow,
    TableCell,
    DescripyionCell,
    FileIcon,
    DeleteIcon,
    TabsWrapper,
    TransactionsTabsContainer,
    TransactionsTab,
    UserIconWrapper,
    UserTextnWrapper,
    UserIcon,
    FullStarIcon,
    HalfStarIcon,
    ActionButtonsWrapper,
    Button,
    ReviewText,
    RattingTextContainer
}
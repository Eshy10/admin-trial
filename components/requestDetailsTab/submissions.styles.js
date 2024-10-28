import styled from 'styled-components';
import { display } from "styled-system";

const DashboardWrapper = styled.div``;

const TableContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-collapse: collapse;
    background-color: #ffffff;
    align-items: stretch;
    padding-bottom: 0.8rem;
    padding-top: 1rem;

    @media screen and (min-width: 768px) {
    width: 100%;
    align-items: stretch;
    }

    @media screen and (max-width: 768px) {
    display: none;
    }
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr;
  padding: 1rem;
  font-weight: bold;
  border-bottom: 1px solid #E2E3DD;
 
   @media screen and (max-width: 26.5625em){
    grid-template-columns: repeat(6, 1fr);
   }
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr;
  padding: 1rem;
  border-bottom: 1px solid #E2E3DD;

   @media screen and (max-width: 26.5625em){
    grid-template-columns: repeat(6, 1fr);
   }
`;

const TableCell = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-family: Poppins;
  font-style: normal;
  font-weight: ${(props) => (props.$headerheight ? "500" : "400")}; 
  line-height: 19.416px;
  letter-spacing: 0.24px;
  color:  ${(props) => (props.$headercolor? "012" : "#454843")};
  
  @media screen and (max-width: 64em){
    padding-left: 1rem;
  }
  @media screen and (max-width: 48em){
    padding-right: 1rem;
  }
   @media screen and (max-width: 26.5625em){
    padding-right: 1rem;
  }
`;

const DateCell = styled(TableCell)`
  margin-left: 2rem;
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
    margin-left: 1rem;
    `;

const DateContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #FFF;
    cursor: pointer;
    margin-top: 0.7rem;
    font-size: 12px;
    font-family: Poppins, sans-serif;
    margin-right: 1rem;
     
    @media (max-width: 64em) {
        margin-bottom: 1rem;
    }
    @media (max-width: 48em) {
        margin-bottom: 1rem;
        margin-right: 0rem;
        margin-left: 0.1rem;
    }
`;

const StatusContainer = styled.div`
    margin-left: -0.8rem;
    width: 50%;
    @media (max-width: 48em) {
        margin-top: -0.8rem;
        margin-left: -1rem;
        width: 100%;
    }
`;

const PeachIcon = styled.img.attrs({
src: "/assets/user-2-peach.png",
alt: "User3 logo",
})`
height: 1rem;
`;

const TransactionsWrapper = styled.div`
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
    margin: 1rem 0.1rem;
    margin-top: 2rem;
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
const ButtonWrapper = styled.div`
      margin-top: 0.6rem;
      width: 50%;
      text-align: center;
      @media screen and (max-width: 48em){
        width: 85%;
      }
`;
const ReceivedButton = styled.p`
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
    @media screen and (max-width: 48em){
        margin-right: -1rem;
    }
`;

const ArtisttName = styled.span`
    font-size: 12px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px;
    letter-spacing: 0.24px;
`;

const UserIconWrapper = styled.span`
    width: 25px;
    height: 25px;
    background-color: #DADDFB;
    border-radius: 50%;
    padding: 0.2rem 0.3rem;
    margin-right: 0.6rem;
`;

const MusicSubmissionWrapper = styled.span`
    display: flex;
`;

const NumOfFiles = styled.p`
    margin-right: 0.8rem;
    color: #454843;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.3px;
    cursor: pointer;
`;

const ViewFiles = styled.p`
    color: #3E46B6;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.3px;
    cursor: pointer;
`;

const ActionButtonsWrapper = styled.div``;

const Button = styled.div`
    font-size: 12px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px;
    letter-spacing: 0.3px;
    border-radius: 10000px;
    border: none;
    background-color: #3E46B6;
    color:  #ffffff;
    padding: 0.2rem 0.8rem;
    cursor: pointer;
    width: 11rem;
    height: 2rem;
    text-align: center;
`;

const MobileContainer = styled.div`
@media screen and (min-width: 768px) {
  display: none;
}
@media screen and (max-width: 768px) {
    display: flex;
}
`;

export {
    DashboardWrapper,
    DateContainer,
    PeachIcon,
    TransactionsWrapper,
    TransactionsTitle,
    ButtonsContainer,
    TransactionsButtons,
    ReceivedButton,
    ButtonWrapper,
    FileIcon,
    DeleteIcon,
    ArtisttName,
    UserIconWrapper,
    UserIcon,
    PencilEditIcon,
    TableContainer,
    TableHeader,
    TableRow,
    TableCell,
    DateCell,
    MusicSubmissionWrapper,
    NumOfFiles,
    ViewFiles,
    ActionButtonsWrapper,
    Button,
    StatusContainer,
    SearchContainer ,
    MobileContainer
}
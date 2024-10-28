import styled from 'styled-components';
import { display } from "styled-system";

const DashboardWrapper = styled.div``;

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
`;

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 0.3rem;
  width: 80vw;
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
  font-weight: ${(props) => (props.$headerweight  ? "500" : "400")}; 
  line-height: 19.416px;
  letter-spacing: 0.24px;
  color:  ${(props) => (props.$headercolor? "012" : "#454843")};
  margin-top: ${({ $marTop }) => ($marTop ? "1rem" : "")};
  @media screen and (max-width: 48em) {
  width: 100%;
  text-align: left;
}
`;

const RowWrrapper = styled.div``;

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

const PencilEditIcon = styled.img.attrs({
    src: "/assets/pencil-line.png",
    alt: "Edit icon",
    })`
    height: 1rem;
    margin-left: 1rem;
    `;

const PeachIcon = styled.img.attrs({
src: "/assets/user-2-peach.png",
alt: "User3 logo",
})`
height: 1rem;
`;

const TransactionsWrapper = styled.div`
    display: ${({ mobile }) => (mobile ? "flex" : "")};
   flex-direction: column;
   justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    display: none;
  }
  @media screen and (max-width: 768px) {
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

export {
    DashboardWrapper,
    PeachIcon,
    TransactionsWrapper,
    TransactionsTitle,
    FileIcon,
    DeleteIcon,
    PencilEditIcon,
    TableContainer,
    TableHeader,
    TableRow,
    TableCell,
    RowWrrapper,
    MusicSubmissionWrapper,
    NumOfFiles,
    ViewFiles,
    ActionButtonsWrapper,
    Button,
}
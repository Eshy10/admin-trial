import styled from 'styled-components';
import { display } from "styled-system";

const TableContainer = styled.table`
width: 100%;
border-collapse: collapse;
background-color: #ffffff;

@media screen and (min-width: 1200px) {
    width: 100%;
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
  font-weight: ${(props) => (props.$headerweight ? "500" : "400")}; 
  line-height: 19.416px;
  letter-spacing: 0.24px;
  color:  ${(props) => (props.$headercolor ? "012" : "#454843")};
  border-radius:  ${(props) => (props.$successradius ? "10000px" : "")};
  background-color:  ${(props) => (props.$collabbg ? "#DADDFB" : "")};
  background-color:  ${(props) => (props.$creatorbg ? "#D6FFFB" : "")};
  font-size:  ${(props) => (props.$successsize ? "10px" : "")};
  padding:  ${(props) => (props.$successpadding ? "1px 8px" : "")};
  text-align: left;
  padding: 8px;
`;

const CollaboratorCell = styled.div`
  font-size: 12px;
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
  padding:  ${(props) => (props.$successpadding ? "1px 8px" : "")};
  width:  ${(props) => (props.$collabwidth ? "75%" : "")};
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

`;

const RowWrrapper = styled.div``;

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

export {
    TransactionsWrapper,
    TableContainer,
    TBodyContainer,
    TableHeader,
    TableRow,
    TableCell,
    FileIcon,
    DeleteIcon,
    TabsWrapper,
    TransactionsTabsContainer,
    CollaboratorCell,
    RowWrrapper 
}
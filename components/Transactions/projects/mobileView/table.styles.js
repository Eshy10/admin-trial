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
  font-family: Poppins;
  font-size: 12px;
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
  width:  ${(props) => (props.$collabwidth ? "68%" : "")};
  width:  ${(props) => (props.$creatorwidth ? "48%" : "")};
  color:  ${(props) => (props.$creatorcolor ? "#36D7FF" : "")};
    text-align: left;

@media screen and (max-width: 48em) {
  width: 100%;
}
`;

const CollaboratorCell = styled.div`
  align-items: center;
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
  color:  ${(props) => (props.$creatorcolor ? "#36D7FF" : "")};
  text-align: left
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
}
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
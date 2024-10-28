import styled from 'styled-components';
import { display, space, width } from "styled-system";

const TransactionsWrapper = styled.div`
   display: ${({ mobile }) => (mobile ? "none" : "flex")};
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
color: ${(props) => (props.$headercolor? "#012" : "#454843")};
border-radius: ${(props) => (props.$successradius ? "10000px" : "")};
background-color: ${(props) => (props.$successbg ? "#DFFAD5" : "")};
font-size: ${(props) => (props.$successsize ? "10px" : "")};
padding: ${(props) => (props.$successpadding ? "1pxx" : "")};
text-align: left;
padding: 8px;

@media screen and (max-width: 48em) {
  width: 100%;
}
`;

const SucessCell = styled.div`
display: flex;
align-items: center;
font-size: 12px;
font-family: Poppins;
font-style: normal;
font-weight: ${(props) => (props.$headerweight ? "500" : "400")};
line-height: 19.416px;
letter-spacing: 0.24px;
color: ${(props) => (props.$headercolor ? "#012" : "#454843")};
color: #2AA836;
border-radius: ${(props) => (props.$successradius ? "10000px" : "")};
background-color: ${(props) => (props.$successbg ? "#DFFAD5" : "")};
font-size: ${(props) => (props.$successsize ? "10px" : "")};
padding: ${(props) => (props.$successpadding ? "1px 8px" : "")};
text-align: left;
@media screen and (max-width: 64em) {
    width: 76%;
}
@media screen and (max-width: 48em) {
  width: 100%;
}
`;

const IconCell = styled.div`
  display: flex;
  align-items: center;
`;

const FileIcon = styled.img.attrs({
    src: "/assets/file-list-2-line.png",
    alt: "File icon",
    })`
    height: 1rem;
    margin-top: 0.3rem;
    z-index: 3000;
`;
const DeleteIcon = styled.img.attrs({
    src: "/assets/delete-bin-line.png",
    alt: "Delete icon",
    })`
    height: 1.1rem;
    margin-left: 1rem;
    cursor: pointer;
    z-index: 2000;
`;

export {
    TransactionsWrapper,
    FileIcon,
    DeleteIcon,
    TableContainer,
    TableHeader,
    TBodyContainer,
    TableRow,
    TableCell,
    IconCell,
    SucessCell
}
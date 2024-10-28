import styled from 'styled-components';
import { display, space, width } from "styled-system";

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

const RowWrrapper = styled.div``;

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
padding: ${(props) => (props.$successpadding ? "1px 13px" : "")};
text-align: left;

 @media screen and (max-width: 48em) {
    width: 20%;
    text-align: left;
}
 @media screen and (max-width: 26.5625em){
      width: 35%;
}
@media screen and (max-width: 23.4375em){
      width: 41%;
}
@media screen and (max-width: 20em){
      width: 47%;
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
    RowWrrapper,
    TableRow,
    TableCell,
    IconCell,
    SucessCell
}
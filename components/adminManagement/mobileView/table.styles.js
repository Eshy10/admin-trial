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

   @media screen and (max-width: 20em){
     margin-left: -1.4rem;
   }
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
  font-size: 12px;
  font-family: Poppins;
  font-style: normal;
  font-weight: ${(props) => (props.$headerweight ? "500" : "400")}; 
  line-height: 19.416px;
  letter-spacing: 0.24px;
  color:  ${(props) => (props.$headercolor? "012" : "#454843")};
  @media screen and (max-width: 48em) {
  width: 100%;
  text-align: left;
  white-space: nowrap;

   @media screen and (max-width: 20em){
    padding-left: 0.8rem;
   }
}
`;

const SucessCell = styled.div`
display: inline-block;
align-items: center;
font-size: 12px;
font-family: Poppins;
font-style: normal;
font-weight: ${(props) => (props.$headerweight  ? "500" : "400")};
line-height: 19.416px;
letter-spacing: 0.24px;
color:  ${(props) => (props?.$color ? props.$color : "#2AA836")};
border-radius: ${(props) => (props.$successradius ? "10000px" : "")};
background-color:  ${(props) => (props?.$bcolor ? props.$bcolor : "#DFFAD5")};
font-size: ${(props) => (props.$successsize ? "10px" : "")};
padding: ${(props) => (props.$successpadding ? "1px 8px" : "")};
min-width: ${(props) => (props.$successwidth ? "" : "")};
text-align: left;
`;

const RowWrrapper = styled.div``;

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
    margin-left: 1rem;
    margin-top: 0.3rem;
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

const MobileContainer = styled.div`
@media screen and (min-width: 768px) {
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
    TransactionsWrapper,
    TransactionsTitle,
    FileIcon,
    DeleteIcon,
    UserIconWrapper,
    UserIcon,
    PencilEditIcon,
    TableContainer,
    TableHeader,
    TableRow,
    TableCell,
    SucessCell,
    DateCell,
    MobileContainer,
    IconCell,
    RowWrrapper
}
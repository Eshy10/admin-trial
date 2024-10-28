import styled from 'styled-components';

const TableContainer = styled.table`
width: 100%;
border-collapse: collapse;
background-color: #ffffff;

@media screen and (min-width: 768px) {
    width: 100%;
}
`;
const TBodyContainer = styled.tbody``

const TableHeader = styled.th`
text-align: left;
padding: 5px;
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
  background-color:  ${(props) => (props.$successbg ? "#DFFAD5" : "")};
  font-size:  ${(props) => (props.$successsize ? "10px" : "")};
  text-align: left;
  padding: 8px;
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
`;
const FileIcon = styled.img.attrs({
    src: "/assets/file-list-2-line.png",
    alt: "File icon",
    })`
    height: 1rem;
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

export {
    TransactionsWrapper,
    TableContainer,
    TBodyContainer,
    TableHeader,
    TableRow,
    TableCell,
    DescripyionCell,
    FileIcon,
}

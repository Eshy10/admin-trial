import styled from 'styled-components';
import { display } from "styled-system";

const ProfileWrapper = styled.div`
    width: 100%;
`;

const TableContainer = styled.div`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;
  padding: 1rem;
  font-weight: bold;
  border-bottom: 1px solid #E2E3DD;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;
  padding: 1rem;
  border-bottom: 1px solid #E2E3DD;
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
  color:  ${(props) => (props.$headercolor ? "012" : "#454843")};
  border-radius:  ${(props) => (props.$successradius ? "10000px" : "")};
  background-color:  ${(props) => (props.$successbg ? "#DFFAD5" : "")};
  font-size:  ${(props) => (props.$successsize ? "10px" : "")};
  padding:  ${(props) => (props.$successpadding ? "3px 8px" : "")};
  width:  ${(props) => (props.$successwidth ? "34%" : "")};
`;

const BackContainer = styled.div`
display: flex;
align-items: center;
cursor: pointer;
padding: 2px 10px;
margin-top: -2rem;
@media screen and (max-width: 26.5625em){
    padding-left: 0.9rem;
}
`;

const BackText = styled.p`
    padding-left: 0.6rem;
    font-size: 13px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: 22.652px; /* 161.8% */
    letter-spacing: 0.7px;
    colorr: #012;
    cursor: pointer;
`;

const BackIcon = styled.img.attrs({
    src: "/assets/back.png",
    alt: "Back icon",
    })`
    height: 1rem;
`;

const TabsWrapper= styled.div`
    display: flex;
    align-items: center;
     @media screen and (max-width: 20em){
        margin-left: -0.9rem
     }
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

const TopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 48em){
        display: block;
    }
`;

const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    padding-top: 20px;
    @media screen and (max-width: 48em){
        padding: 10px;
    }
    @media screen and (max-width: 26.5625em){
        padding-left: 0.9rem;
    }
`;

const ButtonContainer = styled.div`
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border: ${(props) => (props.greyborder ? "1px solid #767873" : "1px solid #D8D8D8")};
    border: ${(props) => (props.redborder ? "1px solid #DE786D" : "1px solid #D8D8D8")};
    margin-bottom: 1.5em;
    background-color: ${(props) => (props.bluebg ? "#3E46B6" : "#ffffff")};
    padding: 1px 10px;
    margin-right: 1rem;
    margin-left: ${(props) => (props.newmargin ? "1rem" : "")};
    cursor: pointer;
    @media (max-width: 64em) {
        margin-bottom: 1rem;
    }
    @media (max-width: 48em) {
        margin-bottom: 1rem;
    }
`;

const ButtonText = styled.p`
     font-size: 12px;
     color: #ffffff;
     color:  ${(props) => (props.greycolor ? "#767873" : "")};
     color:  ${(props) => (props.redcolor ? "#DE786D" : "")};
     white-space: nowrap;
     @media screen and (max-width: 20em){
         font-size: 8px;
     }
`;

const EditIcon = styled.img.attrs({
    src: "/assets/pencil-white.png",
    alt: "Edit logo",
    })`
    height: 1rem;
    padding-right: 0.5rem;
    cursor: pointer;
`;

const CloseIcon = styled.img.attrs({
    src: "/assets/close-round-line.png",
    alt: "Close logo",
    })`
    height: 1rem;
    padding-right: 0.5rem;
    cursor: pointer;
`;

const DeleteIcon = styled.img.attrs({
    src: "/assets/delete-red-line.png",
    alt: "Delete logo",
    })`
    height: 1rem;
    padding-right: 0.5rem;
    cursor: pointer;
`;

export {
    ProfileWrapper,
    BackContainer,
    BackText,
    BackIcon,
    TableContainer,
    TableHeader,
    TableRow,
    TableCell,
    TabsWrapper,
    TransactionsTabsContainer,
    TransactionsTab,
    TopWrapper,
    ButtonsWrapper,
    ButtonContainer,
    ButtonText,
    EditIcon,
    CloseIcon,
    DeleteIcon,
}
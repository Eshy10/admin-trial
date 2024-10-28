import styled from 'styled-components';
import { display } from "styled-system";

const TransactionsWrapper = styled.div`
    width: 90.8%;
    border-radius: 10px;
    border: 1px solid #E2E3DD;
    background-color: #ffffff;
    padding: 1rem 2rem;
    margin: 3rem 0.8rem;
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
const MobileContainer = styled.div`
@media screen and (min-width: 1200px) {
  display: none;
}
@media screen and (max-width: 1200px) {
    display: flex;
}
`;
const TransactionsHeader = styled.div`
`;

const ButtonsWrapper = styled.span`
    display: flex;
`;

const TransactionsTitle = styled.h3`
    font-size: 16px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: 32.36px;
    letter-spacing: 0.4px;
    color: #3E46B6;
     @media screen and (max-width: 26.5625em){
        margin-left: -1rem;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    padding-bottom: 0.5rem;
`;

const TransactionsButtons = styled.div`
    display: flex; 
    align-items: center; 
`;
const ButtonWrapper = styled.div`
   
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

const SearchContainer = styled.div`
      margin-top: 1.5rem;
   margin-bottom: 1rem;
   margin-left: -1rem;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 50%;
     @media screen and (max-width: 48em){
      display: block;
    }
`;

const TabsContainer = styled.div`
  
`;

export {
    TransactionsWrapper,
    TransactionsHeader,
    TransactionsTitle,
    ButtonsContainer,
    TransactionsButtons,
    ButtonWrapper,
    TabsWrapper,
    TransactionsTabsContainer,
    TransactionsTab,
    ButtonsWrapper,
    SearchContainer,
    TabsContainer,
    MobileContainer 
}

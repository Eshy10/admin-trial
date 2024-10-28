import styled from 'styled-components';

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

const TransactionsTitle = styled.h3`
    font-size: 16px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: 32.36px;
    letter-spacing: 0.4px;
    color: #3E46B6;
    margin-top: 2rem;
    @media screen and (max-width: 26.5625em){
        margin-left: -1rem;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.5rem;
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

const ReceivedButton = styled.p`
    margin-right: 1rem;
    font-size: 14px;
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
`;

const PaymentButton = styled.button`
    margin-right: 1rem;
    font-size: 14px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px;
    letter-spacing: 0.3px;
    border-radius: 10000px;
    border: 1px solid #767873; 
    background-color: #ffffff;
    color: #767873;
    padding: 0.2rem 0.9rem;
    cursor: pointer;
`;

const WithdrawalButton = styled.button`
    font-size: 14px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px;
    letter-spacing: 0.3px;
    border-radius: 10000px;
    border: 1px solid #767873; 
    background-color: #ffffff;
    color: #767873;
    padding: 0.2rem 0.9rem;
    cursor: pointer;
`
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

const TabsContainerWrapper = styled.div`
   
`;
export {
    TransactionsWrapper,
    TransactionsHeader,
    TransactionsTitle,
    ButtonsContainer,
    PaymentButton,
    ReceivedButton,
    WithdrawalButton,
    TransactionsTab,
    SearchContainer,
    TabsContainer,
    TabsContainerWrapper,
    MobileContainer
}
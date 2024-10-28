import styled from 'styled-components';

const TransactionsTabsWrapper = styled.div`
    width: 100%;
`;

const TransactionsInnerTabs = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 26.5625em){
          overflow-x: scroll;
          overflow-y: hidden;
          white-space: nowrap;
          padding-left: 0.5rem;
          padding-bottom: 1rem;
     }
    `;

const TransactionsTabsContainer = styled.div`
    display: flex;
    align-items: center;
    padding-top: 2rem;
    padding-left: 0.8rem;
     @media (max-width: 64em) {
       padding-left: 0rem;
     }
`;

const TransactionsTab = styled.span`
    padding: 6px 15px;
    border-radius: 10000px;
    background-color: ${(props) => (props.$transactionsbg  ? "#3E46B6" : "#F2F2F2")};
    color: ${(props) => (props.$transactionscolor ? "#FFFFFF" : "#767873")};
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px; 
    letter-spacing: 0.3px;
    margin-right: 0.8rem;
    cursor: pointer;
`;

const TabContentWrapper = styled.div`
 @media screen and (max-width: 26.5625em){
          overflow-x: scroll;
          overflow-y: hidden;
          white-space: nowrap;
   }
`;

export {
    TransactionsTabsWrapper,
    TransactionsInnerTabs,
    TransactionsTabsContainer,
    TransactionsTab,
    TabContentWrapper
}
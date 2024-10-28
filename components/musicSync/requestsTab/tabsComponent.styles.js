import styled from 'styled-components';

const TransactionsTabsWrapper = styled.div`
    width: 100%;
`;

const TransactionsInnerTabs = styled.div`
    display: flex;
    align-items: center;
`;

const TransactionsTabsContainer = styled.div`
    display: flex;
    align-items: center;
    padding-top: 2rem;
    padding-left: 0.8rem;
    @media screen and (max-width: 26.5625em){
       padding-left: 0rem;
    }
`;

const TransactionsTab = styled.span`
    margin-right: 1rem;
    font-size: 14px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px;
    letter-spacing: 0.3px;
    border-radius: 10000px;
    border:  ${(props) => (props.$bordercolor ? "1px solid #3E46B6" : "")};
    background-color: #ffffff;
    color: ${(props) => (props.$requestscolor ? "#3E46B6" : "#767873")};
    padding: 0.2rem 0.9rem;
    cursor: pointer;
    white-space: nowrap;

     @media screen and (max-width: 23.4375em){
        font-size: 11px;
     }
     @media screen and (max-width: 20em){
        padding: 0.5px;
     }
`;

const TabContentWrapper = styled.div`
`;

export {
    TransactionsTabsWrapper,
    TransactionsInnerTabs,
    TransactionsTabsContainer,
    TransactionsTab,
    TabContentWrapper
}
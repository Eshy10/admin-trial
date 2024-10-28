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
`;

const TransactionsTab = styled.span`
    padding: 6px 15px;
    border-radius: 10000px;
    color: ${(props) => (props.transactionscolor ? "#3E46B6" : "#767873")};
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px; 
    letter-spacing: 0.3px;
    margin-right: 0.8rem;
    cursor: pointer;
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
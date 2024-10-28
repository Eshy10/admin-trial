import styled from 'styled-components';


const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.5rem;
`;

const TransactionsButtons = styled.div`
    display: flex; 
    align-items: center;
    margin-right: 2rem;
`;
const ButtonWrapper = styled.div`
   
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
`;

export {
    ButtonsContainer,
    TransactionsButtons,
    ButtonWrapper,
    ReceivedButton,
    PaymentButton,
    WithdrawalButton,
}

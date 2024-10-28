import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


const PaginationContainer = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     padding: 0.9rem;
     width: 100%;
     gap: 20px;
     transition: transform 0.3s ease; 
     
     @media (max-width: 760px) {
        gap: 0px;
        justify-content: space-between;
    }
`;

const LeftArrowIcon = styled(FiChevronLeft)`    
    height: 20px;
    width: 20px;
    color: ${props => (props.$active ? '#000' : '#ccc')};
    cursor: ${props => (props.$active ? 'pointer' : 'not-allowed')};
    `;

const RightArrowIcon = styled(FiChevronRight)`
    height: 20px;
    width: 20px;
    color: ${props => (props.$active ? '#000' : '#ccc')};
    cursor: ${props => (props.$active ? 'pointer' : 'not-allowed')};
`;

const PageNumber = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background-color:  ${(props) => (props.$isactive ? "#36D7FF" : "#F2F2F2")};
    border: none;
    cursor: pointer;

    font-size: 15px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px;
    letter-spacing: 0.3px;
    text-align: center;
    color: ${(props) => (props.$isactive ? "#ffffff" : "#767873")};

    @media (max-width: 760px) {
        width: 30px;
        height: 30px;
        border-radius: 7.5px;
        font-size: 10px;
        line-height: 12px;
        letter-spacing: 0.15px;
    }
`;

const Seperator = styled.span`
    width: 40px;
    text-align: center;

    @media (max-width: 760px) {
        width: 30px;
    }
`;

const Ellipses = () => {
    return <Seperator> . . . </Seperator>;
};

export {
    PaginationContainer,
    PageNumber,
    LeftArrowIcon,
    RightArrowIcon,
    Ellipses,
}
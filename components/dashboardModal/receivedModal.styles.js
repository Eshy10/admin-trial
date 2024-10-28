import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding-left: 3.3rem;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 10px 30px;
  width: 60%;
  max-height: 100%;
  margin: 0 0 0 14rem;
  z-index: 10000;
  @media (max-width: 64em) {
    margin: 0 0 0 9rem;
  }
 @media (max-width: 48em) {
  padding-bottom: 55px;
  width: 74%;
  margin: 3rem 0 0 -4rem;
}
@media screen and (max-width: 26.5625em){
    width: 100%;
    margin: 0 0 0 -3.5rem;
     white-space: pre-wrap;
}
@media screen and (max-width: 23.4375em){
      width: 92vw;
}
@media screen and (max-width: 20em){
    width: 100vw;
}
`;

const ModalTitle = styled.h3`
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 40.45px; 
  letter-spacing: 0.5px;
  color: 012;
  @media screen and (max-width: 26.5625em){
       font-size: 21px;
  }
   @media screen and (max-width: 20em){
      font-size: 16px;
  }
`;

const IconsWrapper = styled.span`
    display: flex;
    align-items: center;
`;

const IconContainer = styled.div`
      cursor: pointer;
`;

const CloseIcon = styled.img.attrs({
    src: "/assets/close-small.png",
    alt: "Close icon",
    })`
    height: 1.2rem;
    cursor: pointer;
    `;

const DotsIcon = styled.img.attrs({
    src: "/assets/three-dots.png",
    alt: "Dots icon",
    })`
    height: 1rem;
    margin-right: 0.9rem;
    cursor: pointer;
    `;

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.8rem;
`;

const TransactionDetailsWrapper = styled.div`
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #ffffff;
    border: 1px solid #E2E3DD;
    margin-top: -1rem;
    @media screen and (max-width: 26.5625em){
        padding: 0px 0px; 
    }
`;

const PriceText = styled.p`
    font-family: Poppins;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 1px;
    color: #012;
    text-align: center;
    margin-top: -0.1rem;
     @media screen and (max-width: 26.5625em){
        font-size: 38px;
  }
   @media screen and (max-width: 20em){
       font-size: 21px;
  }
`;

const TitleText = styled.p``;

const TableContainer = styled.div`
  width: 100%;
  border-collapse: collapse;
  padding-bottom: 0.8rem;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0.3rem;
  font-weight: bold;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  padding: 0.3rem;
`;

const TableCell = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400; 
  line-height: 19.416px;
  letter-spacing: 0.24px;
  color:  ${(props) => (props.$headercolor? "012" : "#767873")};
  border-radius:  ${(props) => (props.$successradius ? "10000px" : "")};
  background-color:  ${(props) => (props.$successbg ? "#DFFAD5" : "")};
  font-size:  ${(props) => (props.$successsize ? "10px" : "")};
  padding:  ${(props) => (props.$successpadding ? "3px 8px" : "")};
  width:  ${(props) => (props.$successwidth ? "34%" : "")};
`;

const DescTextCell = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400; 
  line-height: 19.416px;
  letter-spacing: 0.24px;
  color:  ${(props) => (props.$headercolor ? "012" : "#767873")};
  border-radius:  ${(props) => (props.$successradius ? "10000px" : "")};
  background-color:  ${(props) => (props.$successbg ? "#DFFAD5" : "")};
  font-size:  ${(props) => (props.$successsize ? "10px" : "")};
  padding:  ${(props) => (props.$successpadding ? "3px 8px" : "")};
  width:  ${(props) => (props.$successwidth ? "34%" : "")};
`;

const SuccessBtnWrapper = styled.div`
    width: 100%;
    text-align: center;
    padding-top: 2rem;
`;

const SuccessBtn = styled.button`
     text-align: center;
     padding: 15px 30px;
     border-radius: 5px;
     background-color: #DFFAD5;
     font-family: Poppins;
     font-size: 15px;
     font-style: normal;
     font-weight: 500;
     line-height: 24.27px; 
     letter-spacing: 0.3px;
     color: #2AA836;
     border: none;
      width: 100%;
`;


export {
    ModalOverlay,
    ModalContent,
    ModalTitle,
    CloseIcon,
    DotsIcon,
    IconsWrapper,
    IconContainer,
    TopContainer,
    PriceText,
    TransactionDetailsWrapper,
    TitleText,
    TableContainer,
    TableHeader,
    TableRow,
    TableCell,
    SuccessBtnWrapper,
    SuccessBtn,
}
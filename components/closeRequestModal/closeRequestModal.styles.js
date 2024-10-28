import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
  width: 35%;
  max-height: 50vh;
  margin: 0 0 0 12rem;
  @media (max-width: 64em) {
    width: 64%;
    margin: 0 0 0 13rem;
}
@media (max-width: 48em) {
  padding-bottom: 55px;
  width: 74%;
  margin: 0 0 0 0rem;
}
@media screen and (max-width: 26.5625em){
    width: 95%;
    max-height: 55vh;
    margin: 0 0 0 0rem;
}
@media screen and (max-width: 23.4375em){
    width: 96%;
    margin: 0 0 0 -0.2rem;
}
@media screen and (max-width: 20em){
    max-height: 57vh;
}
`;

const ModalTitle = styled.h3`
  text-align: center;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 40.45px; 
  letter-spacing: 0.5px;
  color: 012;
  margin-top: -2rrem;
`;

const ModalDescription = styled.p`
  text-align: center;
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 24.27px;
  letter-spacing: 0.3px;
  color: 012;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;

  button {
    margin-left: 1rem;
  }
`;

const CloseIconContainer = styled.div`
      text-align: right;
      cursor: pointer;
`;

const CheckMarkIconContainer = styled.div`
      text-align: center;
`;

const CloseIcon = styled.img.attrs({
    src: "/assets/close-icon.png",
    alt: "Close icon",
    })`
    height: 1.2rem;
    text-align: right;
    cursor: pointer;
    `;

const InfoIcon = styled.img.attrs({
    src: "/assets/information-line-blue.png",
    alt: "Info icon",
    })`
    height: 3rem;
    text-align: center;
    `;
const CheckMarkIcon = styled.img.attrs({
    src: "/assets/checkbox-circle-line.png",
    alt: "Close icon",
    })`
    height: 3rem;
    text-align: center;
    `;
const ModalButtonWrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 2.8rem;
    padding: 15px 35px;
    border-radius: 100px;
    border: ${(props) => (props.artistborder ? "1px solid #3E46B6" : "none")};
    background-color:  ${(props) => (props.artistbutton ? "#3E46B6" : "#ffffff")};
    cursor: pointer;
    text-align: center;
     @media (max-width: 48em) {
       width: 36%;
  }
  @media screen and (max-width: 26.5625em){
        width: 90%;
        padding: 0px 0px;
  }
  @media screen and (max-width: 23.4375em) {
        width: 73%;
        padding: 0px 0px;
        margin-left: 0.5rem;
  }
  @media screen and (max-width: 205em) {
        width: 97%;
        margin-left: 0.5rem;
        max-height: 54vh;
  }
`;

const ModalButton = styled.p`
  font-family: Poppins;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 22.652px;
  color:  ${(props) => (props.artistcolor ? "#3E46B6" : "#ffffff")};
  cursor: pointer;
  text-align: center;
  @media screen and (max-width: 23.4375em){
     font-size: 8px;
  }
`;

export {
    ModalOverlay,
    ModalContent,
    ModalTitle,
    ModalDescription,
    ModalButtons,
    ModalButtonWrapper,
    ModalButton,
    CloseIcon,
    CheckMarkIcon,
    InfoIcon,
    CloseIconContainer,
    CheckMarkIconContainer,
}
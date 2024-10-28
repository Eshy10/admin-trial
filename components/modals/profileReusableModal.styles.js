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
  padding-left: 3.3rem;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 10px 30px;
  border-radius: 20px;
  width: 45%;
  max-height: 55vh;
  overflow: auto;
  margin: 0 auto;
  @media (max-width: 64em) {
     width: 56%;
}
@media (max-width: 48em) {
  padding-bottom: 55px;
  margin: 0 0 0 7rem;
  width: 64%;
}
 @media screen and (max-width: 26.5625em){
        margin: 0 0 0 -1rem;
        width: 94%;
  }
    @media screen and (max-width: 20em){
          margin: 0 0 0 -1.7rem;
          width: 100%;
          padding: 0px 19px;
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
         font-size: 18px;
  }
`;

const CloseIconContainer = styled.div`
      cursor: pointer;
`;

const CloseIcon = styled.img.attrs({
    src: "/assets/cancel-modal.png",
    alt: "Close icon",
    })`
    height: 1.6rem;
    text-align: right;
    cursor: pointer;
    `;

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MusicFilesnWrapper = styled.div`
    margin-bottom: 2rem;
`;


export {
    ModalOverlay,
    ModalContent,
    ModalTitle,
    CloseIcon,
    CloseIconContainer,
    TopContainer,
    MusicFilesnWrapper,
}
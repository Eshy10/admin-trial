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
@media screen and (max-width: 26.5625em){
    padding-left: 0.5rem; 
}
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
  width: 40%;
  max-height: 85vh;
  overflow-y: scroll;
  overflow-x: hidden;
  margin: 0 auto;
  @media (max-width: 64em) {
    width: 58%;
}
@media (max-width: 48em) {
    width: 88%;
}
  @media screen and (max-width: 26.5625em){
    width: 98%;
   }
@media screen and (max-width: 23.4375em){
   
}
@media screen and (max-width: 20em){
   
}
`;

const ModalTitle = styled.h3`
  text-align: center;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 40.45px; 
  letter-spacing: 0.5px;
  color: 012;
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

const LeftContainer  = styled.span`
    display: flex;
    align-items: center;
      @media screen and (max-width: 23.4375em){
           margin-left: -1.5rem;
     }
`;

const FollowsnWrapper = styled.div`
    padding-bottom: 1rem;
`;

const InnerWrapper = styled.div`
     display: flex;
     justify-content: space-between;
`;

const BackgroundImageWrapper = styled.div`
    background-image: url("/assets/musician.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 80px;
    height: 80px;
    border-radius: 150px;
    background-color: #F9F9F9;
    margin-right: 1rem;
     @media screen and (max-width: 26.5625em){
        width: 56px;
        height: 50%;
    }
     @media screen and (max-width: 23.4375em){
           
     }
     @media screen and (max-width: 20em){
           
     }
`;

const FollowsDetails = styled.div`
   
`;

const FullName = styled.p`
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 32.36px; 
    letter-spacing: 0.4px;
    color: #012;
    @media screen and (max-width: 26.5625em){
     font-size: 14px;
    }
`;

const ArtustName = styled.p`
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px; 
    letter-spacing: 0.3px;
    color: #012;
     @media screen and (max-width: 26.5625em){
        margin-top: -1rem;
    }
`;

const TagsContainer = styled.div`
    display: flex;
    width: 100%;
    @media screen and (max-width: 20em){
        margin-left: -2rem;
    }
`;

const TagItem = styled.span`
    margin-right: 1rem;
    padding: 5px 10px;
    border-radius: 10000px;
    background-color: #DADDFB;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px;
    letter-spacing: 0.24px;
    color: #3E46B6;
     @media screen and (max-width: 26.5625em){
     font-size: 11px;
     margin-right: 0.6rem;
     padding: 4px 9px;
    }
`;

const ButtonWrapper = styled.div`
    margin-top: 0.9rem;
     @media screen and (max-width: 26.5625em){
        margin-left: -6rem;
     }
       @media screen and (max-width: 20em){
        margin-left: -7rem;
     }
`;

const ButtonText = styled.button`
    padding: 8px 15px;
    background-color:  ${(props) => (props.whitebg ? "#ffffff" : "#3E46B6")};
    color:  ${(props) => (props.whitecolor ? "#3E46B6" : "#ffffff")};
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 22.652px; 
    letter-spacing: 0.7px;
    border-radius: 100px;
    border:  ${(props) => (props.btnborder ? "1px solid #3E46B6" : "none")};

    @media screen and (max-width: 26.5625em){
         padding: 8px 18px;
         font-size: 11px;
   }
    @media screen and (max-width: 20em){
        padding: 5px 14px;
        font-size: 10px;
     }
`;



export {
    ModalOverlay,
    ModalContent,
    ModalTitle,
    CloseIcon,
    CloseIconContainer,
    TopContainer,
    LeftContainer,
    FollowsnWrapper,
    InnerWrapper,
    BackgroundImageWrapper,
    FollowsDetails,
    FullName,
    ArtustName,
    TagsContainer,
    TagItem,
    ButtonWrapper,
    ButtonText
}
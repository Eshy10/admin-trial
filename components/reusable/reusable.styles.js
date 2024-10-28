import styled from 'styled-components';
import { display, space, width } from "styled-system";

const DashboardContainer = styled.div`
    ${display};
     width: 100vw;
     height: 100vh;
     display: flex;

     @media (max-height: 600px) {
      height: 100%;
`;

const SideNavContainer = styled.div`
     width: 25%;
     background-color: #3e46b6;
     padding: 50px 0px 0px 30px;
     @media (max-width: 1200px) {
      min-width: 250px;
    }
    @media (max-width: 990px) {
      display: none;
    }
`;

const DashNavContainer = styled.div`
     display: flex;
     width: 100%;
     height: 100%;
     flex-direction: column;
     border-bottom: solid 1px #E2E3DD;
     box-shadow: 0 10px 99px 0 rgba(62, 70, 182, 0.04);
     position: relative;
`;

const DashNavContents = styled.div`
    display: flex;
    flex: 0 0 auto;
    position: sticky;
    top: 0;
    height: 79px;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px #E2E3DD;
    box-shadow: 0 10px 99px 0 rgba(62, 70, 182, 0.04);
    padding: 0 21px;
    z-index: 200;
    background-color: white;
    @media screen and (max-width: 990px){
      height: 70px;
  }
  }
`;

const MainDashContents = styled.div`
    flex: 1;
    overflow-y: auto;
    height: 100%;
`;

const DashNavTitle = styled.div`
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32.36px; 
  letter-spacing: 0.4px;
  @media screen and (max-width: 990px){
    font-size: 15px;
    line-height: 24.27px;
    letter-spacing: 0.3px;
  }
`;

const RightSideNavItems = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 990px){
      display: none
     }
`;

const UserName = styled.span`
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 24.27px; /* 161.8% */
    letter-spacing: 0.3px;
`;

const UserEmail = styled.span`
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px; /* 161.8% */
    letter-spacing: 0.24px;
`;

const NotificationLogo = styled.img.attrs({
  src: "/assets/notification.png",
  alt: "Notification logo",
})`
    height: 20px;
    width: 20px;
  `;

const UserLogo = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "User logo",
}))`
    height: 50px;
    width: 50px;
    @media screen and (max-width: 990px){
      height: 40px;
      width: 40px;
    }
`

const WhiteLogo = styled.img.attrs({
  src: "/assets/white-logo.png",
  alt: "White logo",
})`
    margin-bottom: 56.5px;
  `;

const DropdownLogo = styled.img.attrs({
  src: "/assets/arrow-drop-down-line.png",
  alt: "Dropdown logo",
})`
    height: 20px;
  `;

const DropdownToggle = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    border-radius: 0.3125rem;
  `;

const DropdownContainer = styled.span`
    position: absolute;
    background-color: #fff;
    right: 3px;
    z-index: 2;
    width: 156px;
    height: 100px;
    top: 30px;
    border: 1px solid #e6e6e6;
    border-radius: 15px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 250ms ease-in-out;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  `;

export {
  DashboardContainer,
  SideNavContainer,
  DashNavContainer,
  DashNavContents,
  MainDashContents,
  DashNavTitle,
  RightSideNavItems,
  UserInfoContainer,
  UserEmail,
  UserName,
  NotificationLogo,
  UserLogo,
  DropdownLogo,
  WhiteLogo,
  DropdownToggle,
  DropdownContainer,
};
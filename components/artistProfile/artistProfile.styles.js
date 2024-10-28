import styled from 'styled-components';
import { display } from "styled-system";

const ProfileWrapper = styled.div`
    width: 100%;
`;

const TopContainer = styled.div`
`;

const TableContainer = styled.div`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;
  padding: 1rem;
  font-weight: bold;
  border-bottom: 1px solid #E2E3DD;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;
  padding: 1rem;
  border-bottom: 1px solid #E2E3DD;
`;

const TableCell = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-family: Poppins;
  font-style: normal;
  font-weight: ${(props) => (props.$headerweight  ? "500" : "400")}; 
  line-height: 19.416px;
  letter-spacing: 0.24px;
  color:  ${(props) => (props.$headercolor ? "012" : "#454843")};
  border-radius:  ${(props) => (props.$successradius ? "10000px" : "")};
  background-color:  ${(props) => (props.$successbg ? "#DFFAD5" : "")};
  font-size:  ${(props) => (props.$successsize ? "10px" : "")};
  padding:  ${(props) => (props.$successpadding ? "3px 8px" : "")};
  width:  ${(props) => (props.$successwidth ? "34%" : "")};
`;

const TransactionsWrapper = styled.div`
    flex-direction: column;
    width: 90.8%;
    border-radius: 10px;
    border: 1px solid #E2E3DD;
    background-color: #ffffff;
    padding: 1rem 2rem;
    margin: 3rem 0.8rem;

    @media screen and (max-width: 64em){
        width: 94%;
    }
    @media screen and (max-width: 20em){
        padding: 0.8rem;
    }
`;
const MobileContainer = styled.div`
@media screen and (min-width: 768px) {
  display: none;
}
@media screen and (max-width: 768px) {
    display: flex;
}
`;

const BackContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    @media screen and (max-width: 48em){
        margin-top: -2rem;
    }
    @media screen and (max-width: 26.5625em){
        padding-left: 0.8rem;
    }
`;

const BackText = styled.p`
    padding-left: 0.6rem;
    font-size: 0.813rem;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: 22.652px; /* 161.8% */
    letter-spacing: 0.7px;
    colorr: #012;
    cursor: pointer;
`;

const BackIcon = styled.img.attrs({
    src: "/assets/back.png",
    alt: "Back icon",
    })`
    height: 1rem;
`;
const PhotoWrapperContainer = styled.div`
    display: flex;
    justify-content: space-between;
;
`
const PhotoWrapper = styled.div`
   
`;

const ProfilePicture = styled.div`
    background-image: url("/assets/musician.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 120px;
    height: 120px;
    border-radius: 150px;
    background-color: #F9F9F9;
`;

const ProfileItemsContainer = styled.span`
    display: flex;
    align-items: center;
`;

const ArtistName = styled.p`
    font-family: Poppins;
    font-size: 0.938rem;
    font-style: normal;
    font-weight: 700;
    line-height: 32.36px;
    letter-spacing: 0.4px;
    color: #012;
`;

const ArtistLogo = styled.img.attrs({
    src: "/assets/records.png",
    alt: "Records icon",
    })`
    height: 2rem;
    margin-left: 0.8rem;
`;
const ArtistHandle = styled.small`
    font-family: Poppins;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px;
    letter-spacing: 0.3px;
    color: #012;
`;

const TopIconsWrapper = styled.span``;

const EmailIcon= styled.img.attrs({
    src: "/assets/mail.png",
    alt: "Email icon",
    })`
    height: 2.2rem;
    margin-right: 0.8rem;
    cursor: pointer;
`;

const Dotscon= styled.img.attrs({
    src: "/assets/dots.png",
    alt: "Dots icon",
    })`
    height: 2.2rem;
    cursor: pointer;
`;

const HashTagsContainer = styled.div`
    display: flex;
    align-items: center;
    padding-top: 0.5rem;
    width: 100%;
    @media screen and (max-width: 20em){
     margin-left: -0.8rem;
    }
`;

const HashTag = styled.span`
    margin-right: 0.8rem;
    padding: 5px 10px;
    border-radius: 10000px;
    background-color: #DADDFB;
    color: #3E46B6;
    font-size: 0.75rem;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px;
    letter-spacing: 0.24px;
`;

const StatsContainer = styled.div`
    display: flex;
    align-items: center;
    padding-top: 0.9rem;
    width: 100%;
     @media screen and (max-width: 26.5625em){
          width: 100%;
          overflow-x: scroll;
          overflow-y: hidden;
          white-space: nowrap;
     }
`;

const StatsWrapper = styled.span`
    display: flex;
    align-items: center;
    margin-right: 1rem;
    cursor: pointer;
`;

const TextInfo = styled.p`
    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: normal;
    line-height: 32.36px; 
    letter-spacing: 0.4px;
    color: #012;
`;

const TextInfoBold = styled.span`
    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 32.36px; 
    letter-spacing: 0.4px;
    color: #012;
`;

const ProfileDescription = styled.p`
    font-family: Poppins;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px;
    letter-spacing: 0.3px;
    color: #012;
`;

const SmallItemsTopContainer = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 0.6rem;
    width: 100%;
      @media screen and (max-width: 48em){
        display: block;
     }
`;

const SmallItemsWtapper = styled.span`
    display: flex;
    align-items: center;
    margin-right: 1rem;
    padding-bottom: 0.6rem;
`;

const SmallItemsText = styled.small`
    font-family: Poppins;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 22.652px; 
    letter-spacing: 0.28px;
    color: #767873;
`;

const LocationIcon= styled.img.attrs({
    src: "/assets/user-location-line.png",
    alt: "User Location icon",
    })`
    height: 1rem;
    margin-right: 0.5rem;
`;

const DateIcon= styled.img.attrs({
    src: "/assets/calendar-date.png",
    alt: "Calaendar icon",
    })`
    height: 1rem;
    margin-right: 0.5rem;
`;

const LastSeenIcon = styled.img.attrs({
    src: "/assets/search-eye-line.png",
    alt: "Last Seen icon",
    })`
    height: 1rem;
    margin-right: 0.5rem;
`;

const WebsiteIcon= styled.img.attrs({
    src: "/assets/earth-line.png",
    alt: "Website icon",
    })`
    height: 1rem;
    margin-right: 0.5rem;
`;

const PhoneIcon= styled.img.attrs({
    src: "/assets/phone-line.png",
    alt: "Phone Icon",
    })`
    height: 1rem;
    margin-right: 0.5rem;
`;

const MailIcon= styled.img.attrs({
    src: "/assets/mail-line.png",
    alt: "Mail icon",
    })`
    height: 1rem;
    margin-right: 0.5rem;
`;

const SocialIconsContainer = styled.span`
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
`;

const FacebookIcon= styled.img.attrs({
    src: "/assets/facebook-circle-fill.png",
    alt: "Facebook icon",
    })`
    height: 1rem;
    margin-right: 1em;
`;

const TwitterIcon= styled.img.attrs({
    src: "/assets/twitter-fill-circle.png",
    alt: "Twitter icon",
    })`
    height: 1rem;
    margin-right: 1em;
`;

const InstagramIcon= styled.img.attrs({
    src: "/assets/instagram-fill-circle.png",
    alt: "Instagram icon",
    })`
    height: 1rem;
    margin-right: 1em;
`;

const YouTubeIcon= styled.img.attrs({
    src: "/assets/youtube-fill-circle.png",
    alt: "YouTube icon",
    })`
    height: 1rem;
    margin-right: 1em;
`;

const SoundCloudIcon= styled.img.attrs({
    src: "/assets/soundcloud-fill-circle.png",
    alt: "SoundCloud icon",
    })`
    height: 1rem;
    margin-right: 1em;
`;

const TabsWrapper= styled.div`
   
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
    background-color: ${(props) => (props.$transactionsbg ? "#3E46B6" : "#F2F2F2")};
    color: ${(props) => (props.$transactionscolor ? "#FFFFFF" : "#767873")};
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px; 
    letter-spacing: 0.3px;
    margin-right: 0.8rem;
`;

export {
    ProfileWrapper,
    TopContainer,
    PhotoWrapperContainer,
    PhotoWrapper,
    ProfilePicture,
    ProfileItemsContainer,
    ArtistName,
    ArtistLogo,
    TopIconsWrapper,
    EmailIcon,
    Dotscon,
    ArtistHandle,
    HashTagsContainer,
    HashTag,
    StatsContainer,
    StatsWrapper,
    TextInfo,
    TextInfoBold,
    TransactionsWrapper,
    BackContainer,
    BackText,
    BackIcon,
    TableContainer,
    TableHeader,
    TableRow,
    TableCell,
    ProfileDescription,
    SmallItemsTopContainer,
    SmallItemsWtapper,
    SmallItemsText,
    LocationIcon,
    DateIcon,
    LastSeenIcon,
    WebsiteIcon,
    PhoneIcon,
    MailIcon,
    SocialIconsContainer,
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    YouTubeIcon,
    SoundCloudIcon,
    TabsWrapper,
    TransactionsTabsContainer,
    TransactionsTab,
    MobileContainer 
}
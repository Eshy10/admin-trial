import React, { useState } from "react";
import { useRouter } from 'next/router';
import {
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
    MobileContainer 
} from "./artistProfile.styles";

import TabsComponent, { TabContent } from "@/components/tabs/tabsComponent";
import PaymentHistory from "../../components/Transactions/paymentHistory";
import Requests from "../../components/Transactions/requests";
import Projects from "../../components/Transactions/projects";
import Billings from "../../components/Transactions/billings";
import Reviews from "../../components/Transactions/reviewsRatings";
import Cards from "@/components/cards/cards";
import ProfileReusableModal from "@/components/modals/profileReusableModal";
import FollowsModal from "@/components/modals/followsModal";
import { paginationData } from "../../utils/paginationData";
import TheLink from "@/components/TheLink";

export default function ArtistProfile() {
    const [selected, setSelected] = useState("Payment History");
    const [showModal, setShowModal] = useState(false);
    const [showMusicModal, setShowMusicModal] = useState(false);
    const [showFollowModal, setShowFollowModal] = useState(false);
    const [showFollowingModal, setShowFollowingModal] = useState(false);

    const [showReceivedModal, setShowReceivedModal] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [showWithdrawModal, setShowWithdrawModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [closeModal, setCloseModal] = useState(true);

    const router = useRouter();

    const handleBack = () => {
        router.back(); 
    };

    const handleTabClick = (tab) => {
        setSelected(tab)
    }

    const handleOpenModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setCloseModal(false);
    };

    const handleOpeMusicnModal = () => {
        setShowMusicModal(true);
    };

    const handleOpenFollowModal = () => {
        setShowFollowModal(true);
    };
    const handleCloseFollowModal = () => {
        setCloseModal(false);
    };

    const handleOpenFollowingModal = () => {
        setShowFollowingModal(true);
    };

  return (
    <ProfileWrapper>
        <BackContainer  onClick={handleBack}>
            <BackIcon />
            <BackText>Back</BackText>
        </BackContainer>
        <TransactionsWrapper>
        <TopContainer>
            <PhotoWrapperContainer>
                <PhotoWrapper>
                    <ProfilePicture />
                    <ProfileItemsContainer>
                        <ArtistName>James Arthur</ArtistName>
                        <ArtistLogo />
                    </ProfileItemsContainer>
                </PhotoWrapper>
                <TopIconsWrapper>
                    <TheLink to="/messages">
                        <EmailIcon />   
                    </TheLink>
                    <Dotscon />
                </TopIconsWrapper>
            </PhotoWrapperContainer>
            <ArtistHandle>@JArthur</ArtistHandle>
            <HashTagsContainer>
                <HashTag>#Singer</HashTag>
                <HashTag>#Songwriter</HashTag>
                <HashTag>#Producer</HashTag>
            </HashTagsContainer>
            <StatsContainer>
                <StatsWrapper onClick={handleOpenModal}>
                    <TextInfo><TextInfoBold>4</TextInfoBold> Projects</TextInfo>
                </StatsWrapper>
                <StatsWrapper onClick={handleOpeMusicnModal}>
                    <TextInfo><TextInfoBold>3</TextInfoBold> Music Demos</TextInfo>
                </StatsWrapper>
                <StatsWrapper onClick={handleOpenFollowingModal}>
                    <TextInfo><TextInfoBold>23</TextInfoBold> Following</TextInfo>
                </StatsWrapper>
                <StatsWrapper  onClick={handleOpenFollowModal}>
                    <TextInfo><TextInfoBold>1.6K</TextInfoBold> Followers</TextInfo>
                </StatsWrapper>
            </StatsContainer>
            <ProfileDescription>A professional feedback needed on a song that contain rap and afrobeat. A professional feedback needed on a song that contain rap and afrobeat.</ProfileDescription>
            <SmallItemsTopContainer>
                <SmallItemsWtapper>
                    <LocationIcon />
                    <SmallItemsText>Location: New York, US</SmallItemsText>
                </SmallItemsWtapper>
                <SmallItemsWtapper>
                    <DateIcon />
                    <SmallItemsText>Date Joined:  14 June 2021</SmallItemsText>
                </SmallItemsWtapper>
                <SmallItemsWtapper>
                    <LastSeenIcon />
                    <SmallItemsText>Last Online: 19:15 7 May 2023</SmallItemsText>
                </SmallItemsWtapper>
            </SmallItemsTopContainer>

            <SmallItemsTopContainer>
                <SmallItemsWtapper>
                    <WebsiteIcon />
                    <SmallItemsText>jamesarthur.com</SmallItemsText>
                </SmallItemsWtapper>
                <SmallItemsWtapper>
                    <PhoneIcon />
                    <SmallItemsText>(816) 228-2620</SmallItemsText>
                </SmallItemsWtapper>
                <SmallItemsWtapper>
                    <MailIcon />
                    <SmallItemsText>jamesarthur@gmail.com</SmallItemsText>
                </SmallItemsWtapper>
            </SmallItemsTopContainer>

            <SocialIconsContainer>
                <FacebookIcon />
                <TwitterIcon />
                <TwitterIcon />
                <InstagramIcon />
                <InstagramIcon />
                <YouTubeIcon />
                <SoundCloudIcon />
            </SocialIconsContainer>
        </TopContainer>
        </TransactionsWrapper>
        <Cards />
        <TabsWrapper>
            <TabsComponent
                tabs={[
                "Payment History",
                "Requests",
                "Projects",
                "Payout Information",
                "Billings",
                "Reviews and Ratings",
                ]}
                selected={selected}
                setSelected={handleTabClick}
                >
                <TabContent isSelected={selected === "Payment History"}>
                <PaymentHistory />
            </TabContent>
            <TabContent isSelected={selected === "Requests"}>
                <Requests />
            </TabContent>
            <TabContent isSelected={selected === "Projects"}>
                <Projects />
            </TabContent>
            <TabContent isSelected={selected === "Billings"}>
                <Billings />
            </TabContent>
            <TabContent isSelected={selected === "Reviews and Ratings"}>
                <Reviews />
            </TabContent>
            </TabsComponent>
        </TabsWrapper>
        {showModal && (
        <ProfileReusableModal 
        messageTitle="Projects"
        onClose={handleCloseModal}
        closeModal={() => setShowModal(!showModal)}
        />
        )}
        {showMusicModal && (
        <ProfileReusableModal 
        messageTitle="Music Demos"
        onClose={handleCloseModal}
        closeModal={() => setShowMusicModal(!showMusicModal)}
        />
        )}
        {showFollowingModal && (
        <FollowsModal 
        messageTitle="Followings"
        value={21}
        onClose={handleCloseFollowModal}
        closeModal={() => setShowFollowingModal(!showFollowingModal)}
        />
        )}
        {showFollowModal && (
        <FollowsModal 
        messageTitle="Followers"
        value={21}
        onClose={handleCloseFollowModal}
        closeModal={() => setShowFollowModal(!showFollowModal)}
        />
        )}
    </ProfileWrapper>
  )
}

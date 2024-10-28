import React, { useState } from "react";
import { useRouter } from 'next/router';
import {
    ProfileWrapper,
    BackContainer,
    BackText,
    BackIcon,
    TabsWrapper,
    TopWrapper,
    ButtonsWrapper,
    ButtonContainer,
    ButtonText,
    EditIcon,
    CloseIcon,
    DeleteIcon,
} from "./manageRequest.styles";

import RequestTabsComponent, { RequestTabContent } from "@/components/requestDetailsTab/requestDetailsTab/tabsComponent";
import ProfileReusableModal from "@/components/modals/profileReusableModal";
import FollowsModal from "@/components/modals/followsModal";
import CloseRequestModal from "@/components/closeRequestModal/closeRequestModal";
import DeleteRequestModal from "@/components/deleteRequest/deleteRequest";
import DetailsTab from "@/components/requestDetailsTab/details";
import Submissions from "@/components/requestDetailsTab/submissions";
import TheLink from "@/components/TheLink";


export default function ManageRequest() {
    const [selected, setSelected] = useState("Details");
    const [showModal, setShowModal] = useState(false);
    const [showMusicModal, setShowMusicModal] = useState(false);
    const [showFollowModal, setShowFollowModal] = useState(false);
    const [showFollowingModal, setShowFollowingModal] = useState(false);
    const [showCloseRequestModal, setShowCloseRequestModal] = useState(false);
    const [closeRequestModal, setCloseRequestModal] = useState(true);
    const [showDeleteRequestModal, setShowDeleteRequestModal] = useState(false);
    const [showCloseDeleteRequestModal, setCloseDeleteeRequestModal] = useState(true);
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

    const handleOpenCloseRequestModal = () => {
        setShowCloseRequestModal(true);
    };

    const handleCloseRequestModal = () => {
        setCloseRequestModal (false);
    };

    const handleOpenDeleteRequestModal = () => {
        setShowDeleteRequestModal(true);
    };

    const handleCloseDeleteRequestModal = () => {
        setCloseDeleteeRequestModal (false);
    };


  return (
    <ProfileWrapper>
        <TopWrapper>
            <BackContainer  onClick={handleBack}>
                <BackIcon />
                <BackText>Back</BackText>
            </BackContainer>
            <ButtonsWrapper>
                <TheLink to="/editRequest">
                    <ButtonContainer bluebg>
                        <EditIcon />
                        <ButtonText>EDIT </ButtonText>
                    </ButtonContainer>
                </TheLink>
                <ButtonContainer  greyborder newmargin onClick={handleOpenCloseRequestModal} >
                    <CloseIcon />
                    <ButtonText greycolor>CLOSE REQUEST </ButtonText>
                </ButtonContainer>
                <ButtonContainer  redborder onClick={handleOpenDeleteRequestModal}>
                    <DeleteIcon />
                    <ButtonText redcolor>DELETE </ButtonText>
                </ButtonContainer>
            </ButtonsWrapper>
        </TopWrapper>
        
        <TabsWrapper>
            <RequestTabsComponent
                tabs={[
                "Details",
                "View Submissions (34)",
                ]}
                selected={selected}
                setSelected={handleTabClick}
                noradius 
                nobg 
                noncolor
                >
                <RequestTabContent isSelected={selected === "Details"}>
                <DetailsTab />
            </RequestTabContent>
            <RequestTabContent isSelected={selected === "View Submissions (34)"}>
                <Submissions />
            </RequestTabContent>
            </RequestTabsComponent>
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
        {showCloseRequestModal && (
        <CloseRequestModal 
            messageTitle="Are you sure you want  to close this request?!"
            messageDescription="This is a permanent change and you should only do this if you are sure that you have reviewed all artist submissions and sure of your decision"
            onClose={handleCloseRequestModal}
            closeModal={() => setShowCloseRequestModal(!showCloseRequestModal)}
        />
        )}
        {showDeleteRequestModal && (
        <DeleteRequestModal 
            messageTitle="Are you sure you want  to delete this request?!"
            messageDescription="Do you really want to delete this request?  This is action permanent change and cannot be undone."
            onClose={handleCloseDeleteRequestModal}
            closeModal={() => setShowDeleteRequestModal(!showDeleteRequestModal)}
        />
        )}
    </ProfileWrapper>
  )
}

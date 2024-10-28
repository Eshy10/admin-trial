import React, { useState } from "react";

import {
    DashboardContainer,
    SideNavContainer,
    DashNavContainer,
    DashNavContents,
    MainDashContents,
    DashNavTitle,
    RightSideNavItems,
    UserInfoContainer,
    UserName,
    UserEmail,
    NotificationLogo,
    UserLogo,
    DropdownLogo,
    WhiteLogo,
    DropdownToggle,
    DropdownContainer,
} from "./reusable.styles";
import { useRouter } from 'next/router';
import SideBarLinks from "../sidebarLinks/sidebarLinks";
import LogoutModal from "../modals/logout";

export default function ReusableComponent({ pageLabel, children }) {
    const user = {
        'imgURL': "/assets/man.png"
    }
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [showLogOut, setShow] = useState(false)

    return (
        <>
            <DashboardContainer display={["block", "block", "flex", "flex"]}>
                <SideNavContainer>
                    <WhiteLogo />
                    <SideBarLinks showLogout={() => setShow(true)} />
                </SideNavContainer>
                <DashNavContainer>
                    <DashNavContents>
                        <DashNavTitle>{pageLabel}</DashNavTitle>
                        <RightSideNavItems>
                            <NotificationLogo />
                            <UserLogo src={user.imgURL} alt="display picture" />
                            <UserInfoContainer>
                                <UserName>James Arthur</UserName>
                                <UserEmail>james@razu.io</UserEmail>
                            </UserInfoContainer>
                            <DropdownToggle>
                                <DropdownLogo
                                    onClick={() => setDropDownOpen(!dropDownOpen)}
                                />
                                {
                                    dropDownOpen && (
                                        <DropdownContainer>
                                            <span>Option 1</span>
                                            <span>Option 2</span>
                                            <span>Option 3</span>
                                        </DropdownContainer>
                                    )
                                }
                            </DropdownToggle>
                        </RightSideNavItems>
                    </DashNavContents>
                    <MainDashContents>
                        {children}
                    </MainDashContents>
                </DashNavContainer>
            </DashboardContainer>
            {
                showLogOut &&
                <LogoutModal closeModal={() => setShow(false)} />
            }
        </>
    )
}

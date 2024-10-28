import React from "react";
import { useRouter } from "next/router";
import {
    SideNavLinkWrapper,
    NavRowContainer,
    IconsLabel,
    NavIcon
} from "./sidebarLinks.styles";

export default function SideBarLinks({ showLogout }) {
    const router = useRouter();

    const sideNavLinks = [
        {
            link: "/dashboard",
            label: "Dashboard",
            src: "/assets/home-5-line.png",
            alt: "Dashboard logo",
        },
        {
            link: "/music",
            label: "Music Sync",
            src: "/assets/play-list-2-line.png",
            alt: "Music logo",
        },
        {
            link: "/artists",
            label: "Artists",
            src: "/assets/user-artist.png",
            alt: "Artist logo",
        },
        {
            link: "/companies",
            label: "Companies",
            src: "/assets/disc-line.svg",
            alt: "Companies logo",
        },
        {
            link: "/admin",
            label: "Admin Management",
            src: "/assets/user-2-line.png",
            alt: "Admin logo",
        },
        {
            link: "/messages",
            label: "Messages",
            src: "/assets/message-2-line.png",
            alt: "Messages logo",
        },
        {
            link: "/settings",
            label: "Settings",
            src: "/assets/settings-2-line.png",
            alt: "Settings logo",
        },
        // {
        //     link: "/logout",
        //     label: "Log Out",
        //     src: "/assets/logout-box-line.png",
        //     alt: "Logout logo",
        // }
    ]

    const handleRoute = async (href) => {
        await router.push(href);
    };

    return (
        <SideNavLinkWrapper>
            {
                sideNavLinks.map((url, index) => (
                    <NavRowContainer key={index} href={url.link} onClick={() => handleRoute(url.link)}>
                        <NavIcon src={url.src} alt={url.alt} />
                        <IconsLabel>{url.label}</IconsLabel>
                    </NavRowContainer>
                ))
            }
            <NavRowContainer onClick={showLogout}>
                <NavIcon src="/assets/logout-box-line.png" alt="Log out" />
                <IconsLabel>Log Out</IconsLabel>
            </NavRowContainer>
        </SideNavLinkWrapper>
    )
}

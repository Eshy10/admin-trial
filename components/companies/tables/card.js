import React, { useState, useEffect } from "react";
import {
    TableIcon,
    CardTable,
    CompanyNameSpan,
    UserNameSpan,
    TimeLeft,
    DetailsContainer
} from "./table.styles";
import { getFormattedDate, getTimeLeft } from "@/utils/timeUtils";

function CompanyCard({ headings, id, name, logo, onboardingDate, contractLength, licenseCount }) {
    const formattedDate = getFormattedDate(onboardingDate)

    const [timeLeft, setTimeLeft] = useState(getTimeLeft(onboardingDate, contractLength))
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(getTimeLeft(onboardingDate, contractLength))
        }, 60000);

        return () => {
            clearTimeout(timer); // Corrected cleanup function
        };
    }, []);

    return (
        <CardTable headings={[...headings.slice(1, 6)]}>
            <CompanyNameSpan>
                <TableIcon src={logo} alt="company logo" $hw="30px" />{name}
            </CompanyNameSpan>
            <span>{formattedDate}</span>
            <span>{`${contractLength} Months`}</span>
            <span>{licenseCount}</span>
            <span>
                <TimeLeft>{timeLeft}</TimeLeft>
            </span>
            <a style={{ color: "#3E46B6" }} href={`/companies/${id}`}>
                View
            </a>
        </CardTable>
    )
}

function UsersCard({ headings, id, profilePicture, name, handle, role, dateJoined, addedBy, handleRemoveMember }) {
    const formattedDate = getFormattedDate(dateJoined)

    return (
        <CardTable headings={[...headings.slice(1, 5)]}>
            <UserNameSpan>
                <TableIcon src={profilePicture} alt="company logo" $hw="20px" />
                <DetailsContainer>
                    {name}
                    <span>{handle}</span>
                </DetailsContainer>
            </UserNameSpan>
            <span style={{ color: role === 'Admin' ? '#0670DB' : 'inherit' }}>{role}</span>
            <span>{formattedDate}</span>
            <span>{addedBy}</span>
            <a href={`/companies/${id}`}>
                View Profile
            </a>
            <span onClick={handleRemoveMember}>
                Remove Member
            </span>
        </CardTable>
    )
}

export {
    UsersCard,
    CompanyCard
}